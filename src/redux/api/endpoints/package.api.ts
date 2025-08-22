import { baseApi } from "..";

export const packagesApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    packages: build.query({
      query: () => ({
        url: "/packages",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["packages"],
    }),

    reserveJourneyPackage: build.query({
      query: () => ({
        url: "/reserve/journey/package",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["packages"],
    }),
  }),
});

export const { usePackagesQuery, useReserveJourneyPackageQuery } = packagesApi;
