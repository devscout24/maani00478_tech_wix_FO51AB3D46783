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
      invalidatesTags: ["order"],
    }),
  }),
});

export const { useMakeDealMutation } = orderApi;
