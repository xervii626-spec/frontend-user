import { baseApi } from "./baseApi";

export type PlayerQuestItem = {
  id: number;
  title: string;
  description: string | null;
  goalType: string;
  goalLabel: string;
  targetValue: string;
  progressValue: string;
  percent: number;
  rewardUsd: string;
  rewardMmk: string;
  status: "active" | "claimable" | "claimed" | string;
  canClaim: boolean;
  playOnly: boolean;
  claimedAt: string | null;
};

export const questsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getQuests: build.query<{ mmkPerUsd: string; items: PlayerQuestItem[] }, void>(
      {
        query: () => "/quests",
        providesTags: ["Quests"],
      },
    ),
    claimQuest: build.mutation<
      {
        questId: number;
        rewardUsd: string;
        rewardMmk: string;
        playOnly: boolean;
      },
      number
    >({
      query: (id) => ({
        url: `/quests/${id}/claim`,
        method: "POST",
      }),
      invalidatesTags: ["Quests", "Me", "Bonus"],
    }),
  }),
});

export const { useGetQuestsQuery, useClaimQuestMutation } = questsApi;
