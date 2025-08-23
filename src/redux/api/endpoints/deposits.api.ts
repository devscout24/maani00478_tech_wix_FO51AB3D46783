import { baseApi } from "..";

export const depositsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    depositsRequest: build.mutation({
      query: (data) => ({
        url: "/deposite-request",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["deposits"],
    }),

    depositsRecords: build.query({
      query: () => ({
        url: "/deposite-records",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["deposits"],
    }),
  }),
});

export const { useDepositsRequestMutation, useDepositsRecordsQuery } =
  depositsApi;
