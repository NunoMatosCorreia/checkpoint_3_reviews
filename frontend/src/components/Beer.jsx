import React from "react";

const beer = (props) => {
  const { name, tagline } = props;
  return (
    <div>
      <h5>Name: {name.toUpperCase()}</h5>
      <p>tagline:{tagline}</p>
      <br />
      <hr />
    </div>
  );
};

export default beer;
