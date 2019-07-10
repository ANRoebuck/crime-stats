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
            const category =
            crime.category
              .split('-')
              .map(word => word[0].toUpperCase() + word.slice(1))
              .join(' ');
            const location = 
            crime.location.street.name.replace('On or near ', '');

            return (
              <tr>
                <td>{category}</td>
                <td>{location}</td>
              </tr>
            );

          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
