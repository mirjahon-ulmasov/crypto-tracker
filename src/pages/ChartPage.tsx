import React from "react";
import Layout from "../components/layout/Layout";
import { useFetchAllCoinsQuery } from "../services/CoinService";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { useHistory } from "react-router-dom";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const ChartPage: React.FC = () => {
  const history = useHistory();
  const { data, isLoading, error } = useFetchAllCoinsQuery(null, {
    // pollingInterval: 1000,
  });

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (error) {
    <h1>Something went wrong.</h1>;
  }

  return (
    <Layout>
      <h1>Chart Page</h1>
      {data?.data.coins.map((coin) => {
        return (
          <ul className="user-list">
            <ul
              onClick={() => history.push(`/charts/${coin.id}`)}
              className="user-item"
              key={coin.uuid}
              style={{ display: "flex" }}
            >
              <div>
                <li>{coin.id}</li>
                <li>{coin.rank}</li>
                <li>{coin.symbol}</li>
                <li>{coin.name}</li>
                <li>{coin.price}</li>
                <a href={coin.websiteUrl}>{coin.websiteUrl}</a>
              </div>
              <img width="100" height="100" src={coin.iconUrl} alt="Coin" />
            </ul>
          </ul>
        );
      })}
    </Layout>
  );
};

export default ChartPage;
