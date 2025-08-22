import { baseApi } from "..";

export const withdrawalApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    withdrawalRequest: build.mutation({
      query: (data) => ({
        url: "/withdrawal-request",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["withdrawal"],
    }),
  }),
});

export const { useWithdrawalRequestMutation } = withdrawalApi;
