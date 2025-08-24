import { baseApi } from "..";

export const levelsApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getLevels: build.query({
      query: () => ({
        url: "/get-levels",
        method: "GET",
        credentials: "include",
      }),
    }),
  }),
});

export const { useGetLevelsQuery } = levelsApi;
