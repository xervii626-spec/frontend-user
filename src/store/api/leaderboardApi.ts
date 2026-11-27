import { baseApi } from "./baseApi";

export type LeaderboardMetric = "win" | "bet" | "net" | "biggest";
export type LeaderboardPeriod = "day" | "week" | "all";

export type LeaderboardItem = {
  rank: number;
  displayName: string;
  valueUsd: string;
  valueMmk: string;
  totalWinUsd: string;
  totalBetUsd: string;
  netUsd: string;
  biggestWinUsd: string;
};

export type LeaderboardResponse = {
  metric: LeaderboardMetric;
  period: LeaderboardPeriod;
  periodKey: string;
  timezone: string;
  mmkPerUsd: string;
  items: LeaderboardItem[];
};

export const leaderboardApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLeaderboard: build.query<
      LeaderboardResponse,
      { metric?: LeaderboardMetric; period?: LeaderboardPeriod; limit?: number }
    >({
      query: ({ metric = "win", period = "day", limit = 20 }) => ({
        url: "/leaderboard",
        params: { metric, period, limit },
      }),
      providesTags: ["Leaderboard"],
    }),
  }),
});

export const { useGetLeaderboardQuery } = leaderboardApi;
