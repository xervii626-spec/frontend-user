import {
  createApi,
  fetchBaseQuery,
  type BaseQueryFn,
  type FetchArgs,
  type FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";
import type { RootState } from "../store";
import { clearCredentials, setTokens } from "../features/auth/authSlice";
import { clearAuthSession, patchTokens } from "@/lib/auth-storage";

function resolveApiBase(): string {
  const fromEnv = process.env.NEXT_PUBLIC_API_URL?.replace(/\/$/, "");
  if (fromEnv) return fromEnv;
  if (process.env.NODE_ENV === "production") {
    throw new Error("NEXT_PUBLIC_API_URL is required in production");
  }
  return "http://localhost:5000";
}

const rawBaseQuery = fetchBaseQuery({
  baseUrl: resolveApiBase(),
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootState).auth.accessToken;
    if (token) {
      headers.set("Authorization", `Bearer ${token}`);
    }
    headers.set("Content-Type", "application/json");
    return headers;
  },
});

let refreshPromise: Promise<boolean> | null = null;

async function tryRefresh(
  api: Parameters<BaseQueryFn>[1],
  extra: Parameters<BaseQueryFn>[2],
): Promise<boolean> {
  const state = api.getState() as RootState;
  const refreshToken = state.auth.refreshToken;
  if (!refreshToken) return false;

  const result = await rawBaseQuery(
    {
      url: "/auth/refresh",
      method: "POST",
      body: { refreshToken },
    },
    api,
    extra,
  );

  if (result.error || !result.data) return false;
  const data = result.data as {
    accessToken?: string;
    refreshToken?: string;
  };
  if (!data.accessToken || !data.refreshToken) return false;

  api.dispatch(
    setTokens({
      accessToken: data.accessToken,
      refreshToken: data.refreshToken,
    }),
  );
  patchTokens(data.accessToken, data.refreshToken, state.auth.remember);
  return true;
}

const baseQueryWithReauth: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extra) => {
  let result = await rawBaseQuery(args, api, extra);

  if (result.error && result.error.status === 401) {
    const url =
      typeof args === "string" ? args : typeof args.url === "string" ? args.url : "";
    if (url.includes("/auth/login") || url.includes("/auth/refresh") || url.includes("/auth/register")) {
      return result;
    }

    if (!refreshPromise) {
      refreshPromise = tryRefresh(api, extra).finally(() => {
        refreshPromise = null;
      });
    }
    const ok = await refreshPromise;
    if (ok) {
      result = await rawBaseQuery(args, api, extra);
    } else {
      api.dispatch(clearCredentials());
      clearAuthSession();
      if (typeof window !== "undefined" && !window.location.pathname.startsWith("/login")) {
        window.location.replace("/login");
      }
    }
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: baseQueryWithReauth,
  tagTypes: ["Me", "Games", "Wallet", "Bonus", "Quests", "BigWins"],
  endpoints: () => ({}),
});
