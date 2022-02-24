import React from "react";
import "./veg.jpeg";
import Image from "react-bootstrap/Image";

const ChefPhoto = () => {
  return (
    <div>
      <Image>
        <img
          src={"veg.jpeg"}
          className="img-fluid rounded-pill"
          alt="Chef Image"
        />
      </Image>
    </div>
  );
};

export default ChefPhoto;
