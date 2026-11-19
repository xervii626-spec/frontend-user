import { baseApi } from "./baseApi";

export type DailyLoginStatus = {
  kind: string;
  claimDate: string;
  timezone: string;
  canClaim: boolean;
  claimedToday: boolean;
  amountUsd: string;
  amountMmk: string;
  mmkPerUsd: string;
  playOnly: boolean;
  claimedAt: string | null;
};

export type DailyLoginClaimResult = {
  kind: string;
  claimDate: string;
  amountUsd: string;
  amountMmk: string;
  playOnly: boolean;
  claimedAt: string;
  balance: {
    realBalance: string;
    bonusMoney: string;
    bonusWin: string;
    frozenMoney: string;
    totalBalance: string;
    bonusTotalBalance: string;
  };
};

export const bonusApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getDailyLogin: build.query<DailyLoginStatus, void>({
      query: () => "/bonus/daily-login",
      providesTags: ["Bonus"],
    }),
    claimDailyLogin: build.mutation<DailyLoginClaimResult, void>({
      query: () => ({
        url: "/bonus/daily-login/claim",
        method: "POST",
      }),
      invalidatesTags: ["Bonus", "Me"],
    }),
  }),
});

export const { useGetDailyLoginQuery, useClaimDailyLoginMutation } = bonusApi;
