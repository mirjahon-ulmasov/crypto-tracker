export interface ITodo {
  id: string;
  title: string;
  completed: boolean;
}

export interface IAdress {
  city: string;
  street: string;
  zipcode: string;
  coins: {
    id: string;
    name: string;
  }[];
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

export interface ICoin {
  id: string;
  uuid: string;
  symbol: string;
  name: string;
  description: string;
  color: string;
  iconUrl: string;
  websiteUrl: string;
  type: string;
  price: string;
  rank: number;
  history: string[];
  allTimeHigh: {
    price: string;
    timestamp: number;
  };
}

export interface ICoins {
  data: {
    coins: ICoin[];
  };
}
