import React from "react";

const Table = ({ crimes }) => {
  return (
    <div className="resultsTable">
      <table className="tableContents">
        <thead>
          <tr>
            <th>Category</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {crimes.map(crime => {
            return (
              <tr>
                <td>{crime.category}</td>
                <td>{crime.location.street.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
