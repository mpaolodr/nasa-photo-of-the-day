import React from "react";

//COMPONENTS
import Description from "./Description.js";
import ImageContainer from "./ImageContainer.js";

function Card(props) {
  const { image, date, title, exp } = props;
  return (
    <div className="cardContainer">
      <ImageContainer image={image} />
      <Description title={title} date={date} exp={exp} />
    </div>
  );
}

export default Card;
