import React from "react";
import Image from "react-bootstrap/Image";

const ChefPic = ({ restaurant }) => {
  return (
    <Image
      src={`${restaurant.contact.owner.chefPhotoURL}`}
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
