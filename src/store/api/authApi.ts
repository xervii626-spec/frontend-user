import { baseApi } from "./baseApi";
import type { StoredPlayer } from "@/lib/auth-storage";

export type LoginRequest = {
  username: string;
  password: string;
};

export type LoginResponse = {
  accessToken: string;
  expiresAt: string;
  player: StoredPlayer & {
    gender?: boolean | null;
    wallet?: unknown;
    createdAt?: string;
  };
};

export type MeResponse = {
  player: StoredPlayer & {
    gender?: boolean | null;
  };
  balance: {
    realBalance: string;
    bonusWin: string;
    frozenMoney: string;
    bonusMoney: string;
    totalBalance: string;
    bonusTotalBalance: string;
  };
};

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    login: build.mutation<LoginResponse, LoginRequest>({
      query: (body) => ({
        url: "/auth/login",
        method: "POST",
        body,
      }),
    }),
    me: build.query<MeResponse, void>({
      query: () => "/auth/me",
      providesTags: ["Me"],
    }),
    logout: build.mutation<{ success: boolean }, void>({
      query: () => ({
        url: "/auth/logout",
        method: "POST",
      }),
      invalidatesTags: ["Me", "Wallet"],
    }),
  }),
});

export const { useLoginMutation, useMeQuery, useLazyMeQuery, useLogoutMutation } =
  authApi;
