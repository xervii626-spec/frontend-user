import { baseApi } from "./baseApi";

export type LaunchRequest = {
  gameId: number;
  openType: "real" | "fun";
  language?: string;
  deviceTypeId?: number;
  exitUrl?: string;
  depositUrl?: string;
};

export type LaunchResponse = {
  gameId: number;
  openType: "real" | "fun";
  partnerId: number;
  token: string | null;
  launchUrl: string;
};

export const launchApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    launchGame: build.mutation<LaunchResponse, LaunchRequest>({
      query: (body) => ({
        url: "/launch/game",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useLaunchGameMutation } = launchApi;
