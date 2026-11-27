import { baseApi } from "./baseApi";

export type ChatRole = "user" | "bot" | "agent";

export type ChatMessage = {
  id: number;
  role: ChatRole;
  kind: string;
  faqId: number | null;
  body: string;
  createdAt: string;
};

export type FaqItem = {
  id: number;
  question: string;
  answer: string;
  sortOrder: number;
};

export const chatApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getFaqs: build.query<{ items: FaqItem[] }, void>({
      query: () => "/faqs",
      providesTags: ["Faqs"],
    }),
    getChatThread: build.query<
      {
        threadId: number;
        mode: string;
        inputEnabled: boolean;
        items: ChatMessage[];
      },
      void
    >({
      query: () => "/chat/thread",
      providesTags: ["Chat"],
    }),
    askFaq: build.mutation<
      {
        threadId: number;
        inputEnabled: boolean;
        messages: ChatMessage[];
      },
      { faqId: number }
    >({
      query: (body) => ({
        url: "/chat/faq-ask",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Chat"],
    }),
  }),
});

export const { useGetFaqsQuery, useGetChatThreadQuery, useAskFaqMutation } =
  chatApi;
