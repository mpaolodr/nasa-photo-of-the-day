import React from "react";

//COMPONENTS
import Description from "./Description.js";
import ImageContainer from "./ImageContainer.js";
import DateChange from "./DateChange.js";

function Card(props) {
  const { image, date, title, exp, dateChange } = props;
  return (
    <div className="cardContainer">
      <ImageContainer image={image} />
      <Description title={title} date={date} exp={exp} />
      <DateChange dateChange={dateChange} />
    </div>
  );
}

export default Card;
