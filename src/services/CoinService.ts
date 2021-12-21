import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/dist/query/react";
import { ICoin, ICoins } from "../types";

interface ICoinHistory {
  data: {
    history: {
      price: string;
      timestamp: number;
    }[];
  };
}

const headers = {
  "x-rapidapi-host": "coinranking1.p.rapidapi.com",
  "x-rapidapi-key": "19ee2a39f3mshef7f0281bd05781p15cdf3jsncf06e3d377df",
};

const createRequest = (url: string) => {
  return { url, headers };
};

export const coinAPI = createApi({
  reducerPath: "coinAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://coinranking1.p.rapidapi.com",
  }),
  endpoints: (build) => ({
    fetchAllCoins: build.query<ICoins, any>({
      query: () => createRequest("/coins"),
    }),
    getCryptoHistory: build.query<
      ICoinHistory,
      { coinId: string; period: string }
    >({
      query: ({ coinId, period }) =>
        createRequest(`/coin/${coinId}/history/${period}`),
    }),
    getCryptoById: build.query<{ data: { coin: ICoin } }, string>({
      query: (id) => createRequest(`/coin/${id}`),
    }),
  }),
});

export const {
  useFetchAllCoinsQuery,
  useGetCryptoHistoryQuery,
  useGetCryptoByIdQuery,
} = coinAPI;
