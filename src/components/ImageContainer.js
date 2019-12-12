import React from "react";

function ImageContainer(props) {
  return (
    <div className="imageContainer">
      <img
        onClick={() => {
          document.querySelector(".hide").style.top = "0";
          document.querySelector(".hide").style.transition = "all 2.5s";
        }}
        src={props.image}
        alt=""
      />
    </div>
  );
}

export default ImageContainer;
