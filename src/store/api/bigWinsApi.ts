import { baseApi } from "./baseApi";

export type BigWinItem = {
  id: number;
  displayName: string;
  amountMmk: string;
  gameId: number | null;
  createdAt: string;
};

export const bigWinsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRecentBigWins: build.query<
      { thresholdMmk: string; items: BigWinItem[] },
      { limit?: number } | void
    >({
      query: (params) => ({
        url: "/big-wins/recent",
        params: { limit: params?.limit ?? 20 },
      }),
      providesTags: ["BigWins"],
    }),
  }),
});

export const { useGetRecentBigWinsQuery } = bigWinsApi;
