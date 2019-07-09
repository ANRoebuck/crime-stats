import React from "react";

const Table = ({ crimes }) => {
  return (
    <table className="resultsTable">
      <tr>
        <th>Category</th>
        <th>Location</th>
      </tr>
      {crimes.map(crime => {
        return (
          <tr>
            <td>{crime.category}</td>
            <td>{crime.location.street.name}</td>
          </tr>
        );
      })}
    </table>
  );
};

export default Table;
