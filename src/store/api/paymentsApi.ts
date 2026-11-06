import { baseApi } from "./baseApi";

export type RateResponse = {
  mmkPerUsd: string;
  walletCurrency: string;
  displayCurrency: string;
};

export type PaymentRequestItem = {
  id: number;
  playerId: number;
  type: "deposit" | "withdraw" | string;
  status: "pending" | "approved" | "rejected" | "cancelled" | string;
  amountMmk: string;
  amountUsd: string;
  rateUsed: string;
  method: string | null;
  reference: string | null;
  playerNote: string | null;
  createdAt: string;
  reviewedAt: string | null;
};

export type PaymentListResponse = {
  page: number;
  limit: number;
  total: number;
  items: PaymentRequestItem[];
};

export type CreatePaymentBody = {
  amountMmk: string;
  method?: string;
  reference?: string;
  playerNote?: string;
};

export const paymentsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getRate: build.query<RateResponse, void>({
      query: () => "/payments/rate",
    }),
    getMyPayments: build.query<
      PaymentListResponse,
      { page?: number; limit?: number } | void
    >({
      query: (params) => ({
        url: "/payments/me",
        params: {
          page: params?.page ?? 1,
          limit: params?.limit ?? 20,
        },
      }),
      providesTags: ["Wallet"],
    }),
    createDeposit: build.mutation<PaymentRequestItem, CreatePaymentBody>({
      query: (body) => ({
        url: "/payments/deposit",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wallet", "Me"],
    }),
    createWithdraw: build.mutation<PaymentRequestItem, CreatePaymentBody>({
      query: (body) => ({
        url: "/payments/withdraw",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Wallet", "Me"],
    }),
    cancelPayment: build.mutation<PaymentRequestItem, { id: number }>({
      query: ({ id }) => ({
        url: `/payments/me/${id}/cancel`,
        method: "POST",
      }),
      invalidatesTags: ["Wallet", "Me"],
    }),
  }),
});

export const {
  useGetRateQuery,
  useGetMyPaymentsQuery,
  useCreateDepositMutation,
  useCreateWithdrawMutation,
  useCancelPaymentMutation,
} = paymentsApi;
