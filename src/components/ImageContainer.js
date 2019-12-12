import React from "react";
import { ImageDiv, Image } from "./Styles.js";

function ImageContainer(props) {
  return (
    <ImageDiv>
      <Image
        onMouseEnter={() => {
          document.querySelector(".hide").style.top = "0";
          document.querySelector(".hide").style.transition = "all 1.5s";
        }}
        onClick={() => {
          document.querySelector(".hide").style.top = "600px";
          document.querySelector(".hide").style.transition = "all 1s";
        }}
        src={props.image}
        alt=""
      />
    </ImageDiv>
  );
}

export default ImageContainer;
