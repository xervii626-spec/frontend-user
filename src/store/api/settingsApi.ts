import { baseApi } from "./baseApi";

export const settingsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getPublicSettings: build.query<{ telegramRegisterUrl: string }, void>({
      query: () => "/settings/public",
    }),
  }),
});

export const { useGetPublicSettingsQuery } = settingsApi;
