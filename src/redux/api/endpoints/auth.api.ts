import { baseApi } from "..";

export const authApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    memberLogin: build.mutation({
      query: (data) => ({
        url: "/member-login",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    memberRegister: build.mutation({
      query: (data) => ({
        url: "/member-register",
        method: "POST",
        credentials: "include",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),

    memberLogout: build.query({
      query: () => ({
        url: "/member-logout",
        method: "GET",
        credentials: "include",
      }),
      providesTags: ["auth"],
    }),
  }),
});

export const {
  useMemberLoginMutation,
  useMemberRegisterMutation,
  useMemberLogoutQuery,
} = authApi;
