import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IUser } from "../types";

export const userAPI = createApi({
  reducerPath: "userAPI",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ["Post"],
  endpoints: (build) => ({
    fetchAllUsers: build.query<IUser[], number>({
      query: (limit: number = 5) => ({
        url: "/users",
        method: "GET",
        params: {
          _limit: limit,
        },
      }),
      providesTags: (result) => ["Post"],
    }),
    createUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: "/users",
        method: "POST",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),
    updateUser: build.mutation<IUser, IUser>({
      query: (user) => ({
        url: `/users/${user.id}`,
        method: "PUT",
        body: user,
      }),
      invalidatesTags: ["Post"],
    }),
    deleteUser: build.mutation<IUser, string>({
      query: (id) => ({
        url: `users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Post"],
    }),
  }),
});

export const {
  useFetchAllUsersQuery,
  useCreateUserMutation,
  useUpdateUserMutation,
  useDeleteUserMutation,
} = userAPI;
