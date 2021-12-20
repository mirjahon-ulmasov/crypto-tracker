import React from "react";
import { IUser } from "../../types";

interface UserProps {
  user: IUser;
  onUpdate(user: IUser): void;
  onDelete(id: string): void;
}

const User: React.FC<UserProps> = ({ user, onUpdate, onDelete }) => {
  const updateHandler = (event: React.MouseEvent<HTMLUListElement>) => {
    const name = prompt("Name:");
    const email = prompt("Email:");
    const city = prompt("City:");
    const street = prompt("Street:");
    const zipcode = prompt("ZipCode:");

    onUpdate({
      ...user,
      name: name || "",
      email: email || "",
      address: {
        city: city || "",
        street: street || "",
        zipcode: zipcode || "",
      },
    } as IUser);
  };

  const deleteHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onDelete(user.id);
  };

  return (
    <ul className="user-item" onClick={updateHandler}>
      <li>{user.id}</li>
      <li>{user.name}</li>
      <li>{user.email}</li>
      <ul>
        <li>{user.address.city}</li>
        <li>{user.address.street}</li>
        <li>{user.address.zipcode}</li>
      </ul>
      <button onClick={deleteHandler}>DELETE</button>
    </ul>
  );
};

export default User;
