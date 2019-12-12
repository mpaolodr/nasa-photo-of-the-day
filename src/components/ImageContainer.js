import React from "react";

function ImageContainer(props) {
  return (
    <div className="imageContainer">
      <img
        onMouseEnter={() => {
          document.querySelector(".hide").style.top = "0";
          document.querySelector(".hide").style.transition = "all 2.5s";
        }}
        onClick={() => {
          document.querySelector(".hide").style.top = "600px";
          document.querySelector(".hide").style.transition = "all 2.5s";
        }}
        src={props.image}
        alt=""
      />
    </div>
  );
}

export default ImageContainer;
