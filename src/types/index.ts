export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IAdress {
  city: string;
  street: string;
  zipcode: string;
}

export interface IUser {
  id: string;
  name: string;
  email: string;
  address: IAdress;
}

export interface IPost {
  id: number;
  title: string;
  author: string;
}
