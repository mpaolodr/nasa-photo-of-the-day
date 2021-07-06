import React from "react";
import { DescContainer, Text, Desc } from "./Styles.js";

function Description({ title, date, exp }) {
  return (
    <DescContainer className="descContainer">
      <Text>{title}</Text>
      <Text>{date}</Text>
      <Desc>{exp}</Desc>
    </DescContainer>
  );
}

export default Description;
