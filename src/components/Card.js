import React from "react";

//STYLED-COMPONENT
import { CardStyle, Hide } from "./Styles";

//COMPONENTS
import Description from "./Description.js";
import ImageContainer from "./ImageContainer.js";
import DateChange from "./DateChange.js";

function Card(props) {
  const { image, date, title, exp, dateChange } = props;
  return (
    <CardStyle>
      <ImageContainer image={image} />
      <Hide className="hide">
        <Description title={title} date={date} exp={exp} />
        <DateChange dateChange={dateChange} />
      </Hide>
    </CardStyle>
  );
}

export default Card;
