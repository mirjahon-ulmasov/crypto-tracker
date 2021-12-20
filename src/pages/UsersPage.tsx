import { FC } from "react";
// import { useAppDispatch, useAppSelector } from "../hooks/redux";
import Layout from "../components/layout/Layout";
import User from "../components/todo/User";
// import { fetchUsers } from "../store/userSlice";
import {
  useCreateUserMutation,
  useDeleteUserMutation,
  useFetchAllUsersQuery,
  useUpdateUserMutation,
} from "../services/UserService";
import { IUser } from "../types";

const UsersPage: FC = () => {
  // const dispatch = useAppDispatch();
  // const { users, isLoading, error } = useAppSelector((state) => state.users);

  // const fetchHandler = () => {
  //   dispatch(fetchUsers());
  // };
  const [createUser, {}] = useCreateUserMutation();
  const [updateUser, {}] = useUpdateUserMutation();
  const [deleteUser, {}] = useDeleteUserMutation();
  const { data: users, isLoading, error } = useFetchAllUsersQuery(5);

  const deleteHandler = (id: string) => {
    deleteUser(id);
  };

  const updateHandler = (user: IUser) => {
    updateUser(user);
  };

  return (
    <Layout>
      {isLoading && <h1>Loading...</h1>}
      {error && <h1>Something went wrong</h1>}
      <button
        onClick={() => {
          const name = prompt("Name:");
          const email = prompt("Email:");
          const city = prompt("City:");
          const street = prompt("Street:");
          const zipcode = prompt("ZipCode:");

          createUser({
            name: name || "",
            email: email || "",
            address: {
              city: city || "",
              street: street || "",
              zipcode: zipcode || "",
            },
          } as IUser);
        }}
      >
        ADD USER
      </button>
      <ul className="user-list">
        {users?.map((user) => {
          return (
            <User
              onDelete={deleteHandler}
              onUpdate={updateHandler}
              key={user.id}
              user={user}
            />
          );
        })}
      </ul>
      {/* <button onClick={fetchHandler}>Fetch</button> */}
    </Layout>
  );
};

export default UsersPage;
