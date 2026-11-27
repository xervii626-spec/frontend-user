import { baseApi } from "./baseApi";

export type InboxAnnouncement = {
  id: number;
  announcementId: number;
  name: string;
  description: string;
  readAt: string | null;
  createdAt: string;
  sentAt: string | null;
};

export const announcementsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAnnouncementInbox: build.query<
      { unreadCount: number; items: InboxAnnouncement[] },
      { limit?: number } | void
    >({
      query: (params) => ({
        url: "/announcements/inbox",
        params: { limit: params?.limit ?? 10 },
      }),
      providesTags: ["Announcements"],
    }),
    markAnnouncementRead: build.mutation<{ ok: boolean }, number>({
      query: (announcementId) => ({
        url: `/announcements/${announcementId}/read`,
        method: "POST",
      }),
      invalidatesTags: ["Announcements"],
    }),
  }),
});

export const {
  useGetAnnouncementInboxQuery,
  useMarkAnnouncementReadMutation,
} = announcementsApi;
