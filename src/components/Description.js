import React from "react";

function Description({ title, date, exp }) {
  return (
    <div className="descContainer">
      <h2>{title}</h2>
      <h2>{date}</h2>
      <p>{exp}</p>
    </div>
  );
}

export default Description;
