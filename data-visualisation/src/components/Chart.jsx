import React from "react";
import Pie from "react-chartjs-2";
import faker from "faker";

const Chart = ({ crimes }) => {
  const tally = crimes.reduce((acc, crime) => {
    acc[crime.category] = (acc[crime.category] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(tally);
  const chartData = labels.map(label => tally[label]);
  const chartColours = labels.map(label => faker.commerce.color());

  const data = {
    labels,
    datasets: [
      {
        data: chartData,
        backgroundColor: chartColours
      }
    ]
  };

  return (
    <Pie
      data={data}
      width={350}
      height={350}
      options={{ maintainAspectRatio: false }}
    />
  );
};
export default Chart;
