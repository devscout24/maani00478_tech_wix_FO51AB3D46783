import { baseApi } from "..";

export const orderApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    makeDeal: build.mutation({
      query: (data) => ({
        url: "/make-deal",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["order", "packages"],
    }),

    dealRecords: build.query({
      query: (query) => ({
        url: `/deal-records?status=${query}`,
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["order"],
    }),
  }),
});

export const { useMakeDealMutation, useDealRecordsQuery } = orderApi;
