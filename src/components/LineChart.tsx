import React from "react";
import { Line } from "react-chartjs-2";

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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

interface LineChartProps {
  coinPrice: number[];
  coinPeriod: string[];
}

const LineChart: React.FC<LineChartProps> = ({ coinPrice, coinPeriod }) => {
  const dataChart = {
    labels: coinPeriod,
    datasets: [
      {
        fill: true,
        data: coinPrice,
        borderColor: "rgb(255, 99, 132)",
        backgroundColor: "rgba(255, 99, 132, 0.5)",
        tension: 0,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: "Chart.js Line Chart",
      },
    },
  };
  return <Line data={dataChart} options={options} />;
};

export default LineChart;
