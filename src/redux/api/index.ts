import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_API_URL,
    credentials: "include",
    prepareHeaders: (headers) => {
      const storedData = localStorage.getItem("persist:userInfo");
      const accessToken = JSON.parse(storedData!).token;

      if (accessToken)
        headers.set("authorization", `Bearer ${JSON.parse(accessToken)}`);

      // Add cache-busting headers
      headers.set("Cache-Control", "no-cache, no-store, must-revalidate");
      headers.set("Pragma", "no-cache");
      headers.set("Expires", "0");

      return headers;
    },
  }),
  // Complete cache disabling
  keepUnusedDataFor: 0,
  refetchOnMountOrArgChange: true,
  refetchOnFocus: true,
  refetchOnReconnect: true,

  endpoints: () => ({}),
  tagTypes: [
    "auth",
    "wallet",
    "withdrawal",
    "order",
    "packages",
    "deposits",
    "my-info",
  ],
});

// export const baseApi = createApi({
//   reducerPath: "baseApi",
//   baseQuery: fetchBaseQuery({
//     baseUrl: import.meta.env.VITE_BASE_API_URL,
//     credentials: "include",
//     prepareHeaders: (headers) => {
//       const storedData = localStorage.getItem("persist:userInfo");
//       const accessToken = JSON.parse(storedData!).token;
//       // console.log("accessToken", accessToken);

//       if (accessToken)
//         headers.set("authorization", `Bearer ${JSON.parse(accessToken)}`);

//       return headers;
//     },
//   }),
//   endpoints: () => ({}),
//   tagTypes: [
//     "auth",
//     "wallet",
//     "withdrawal",
//     "order",
//     "packages",
//     "deposits",
//     "my-info",
//   ],
// });
