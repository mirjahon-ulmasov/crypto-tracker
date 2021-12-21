import { useState } from "react";
import { useParams } from "react-router-dom";
import Layout from "../components/layout/Layout";
import LineChart from "../components/LineChart";
import {
  useGetCryptoByIdQuery,
  useGetCryptoHistoryQuery,
} from "../services/CoinService";

const ChartDetailPage = () => {
  const { coinId } = useParams<{ coinId: string }>();
  const [period, setPeriod] = useState<string>("24h");

  const {
    data: cryptoData,
    isLoading: cryptoLoading,
    error: cryptoError,
  } = useGetCryptoByIdQuery(coinId);

  const {
    data: cryptoHistory,
    isLoading,
    error,
  } = useGetCryptoHistoryQuery({
    coinId,
    period,
  });

  if (isLoading && cryptoLoading) {
    return <h1>Loading....</h1>;
  }

  if (error && cryptoError) {
    return <h1>Error</h1>;
  }

  const {
    data: {
      coin: { id, name, rank, symbol, price, websiteUrl, iconUrl },
    },
  } = cryptoData!;

  const coinPrice = cryptoHistory?.data.history.map((el) => +el.price);
  const coinPeriod = cryptoHistory?.data.history.map((el) =>
    new Date(el.timestamp).toLocaleDateString()
  );
  return (
    <Layout>
      <h1> Detail {name}</h1>
      <ul className="user-list">
        <ul className="user-item" style={{ display: "flex" }}>
          <div>
            <li>{id}</li>
            <li>{rank}</li>
            <li>{symbol}</li>
            <li>{name}</li>
            <li>{price}</li>
            <a href={websiteUrl}>{websiteUrl}</a>
          </div>
          <img width="100" height="100" src={iconUrl} alt="Coin" />
        </ul>
      </ul>
      <label>Period: </label>
      <select
        defaultValue="24h"
        onChange={(e) => {
          setPeriod(e.currentTarget.value);
        }}
      >
        <option value="24h">24h</option>
        <option value="7d">7d</option>
        <option value="30d">30d</option>
        <option value="1y">1y</option>
        <option value="3y">3y</option>
        <option value="5y">5y</option>
      </select>
      <LineChart coinPeriod={coinPeriod!} coinPrice={coinPrice!} />
    </Layout>
  );
};

export default ChartDetailPage;
