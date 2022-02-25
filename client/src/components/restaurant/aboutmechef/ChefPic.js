import React from "react";
import Veg from "./veg.jpeg";
import Image from "react-bootstrap/Image";

const ChefPic = () => {
  return (
    <Image
      src={Veg}
      style={{
        width: "250px",
        height: "250px",
        borderRadius: "50%",
        padding: "5%",
      }}
    />
  );
};

export default ChefPic;
