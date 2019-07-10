import React from "react";

const Heading = ({ search }) => {
  return (
    <h1 className="heading">
      Crime Statistics In <span className="searchArea">{search}</span>
    </h1>
  );
};

export default Heading;
