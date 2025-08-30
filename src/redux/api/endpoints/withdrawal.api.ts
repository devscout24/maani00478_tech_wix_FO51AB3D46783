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
      invalidatesTags: ["withdrawal", "my-info"],
    }),

    withdrawalRecords: build.query({
      query: () => ({
        url: "/withdrawal-records",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["withdrawal"],
    }),
  }),
});

export const { useWithdrawalRequestMutation, useWithdrawalRecordsQuery } =
  withdrawalApi;
