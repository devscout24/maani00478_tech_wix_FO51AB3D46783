import { baseApi } from "..";

export const walletApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    storeWalletInfo: build.mutation({
      query: (data) => ({
        url: "/store-wallet-info",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["wallet"],
    }),

    getWalletInfo: build.query({
      query: () => ({
        url: "/get-wallet-info",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["wallet"],
    }),
  }),
});

export const { useStoreWalletInfoMutation, useGetWalletInfoQuery } = walletApi;
