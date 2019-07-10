import React, { Component } from "react";
import Pie from "react-chartjs-2";
import faker from "faker";


// class Chart extends Component {

//   state = {
//     display: 'category'
//   };

//   render () {
//     return (
//       <div className="chart">
//         <Pie
//           data={data}
//         />
//         <h2 className="totalCrimes">
//           {crimes.length > 0 ? `Total: ${crimes.length}` : null}
//         </h2>
//       </div>
//     );
//   }

// };

const Chart = ({ crimes }) => {

  const tally = crimes.reduce((acc, crime) => {
    acc[crime.category] = (acc[crime.category] || 0) + 1;
    return acc;
  }, {});

  const labels = Object.keys(tally);
  const chartData = labels.map(label => tally[label]);
  const chartColours = labels.map(label => faker.commerce.color());
  console.log(chartColours);

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
    <div className="chart">
      <Pie
        data={data}
      />
      <h2 className="totalCrimes">
        {crimes.length > 0 ? `Total: ${crimes.length}` : null}
      </h2>
    </div>
  );
};
export default Chart;
