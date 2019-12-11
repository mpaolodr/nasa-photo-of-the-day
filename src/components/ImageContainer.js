import React from "react";

function ImageContainer(props) {
  return (
    <div className="imageContainer">
      <img src={props.image} alt="" />
    </div>
  );
}

export default ImageContainer;
