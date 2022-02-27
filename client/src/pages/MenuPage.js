import React from "react";
import background from "../components/landingimage/wood.jpg";
import MenuDisplayCard from "../components/restaurant/MenuDisplayCard";

const MenuPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "50px",
        height: "100%",
      }}
    >
      <MenuDisplayCard />;
    </div>
  );
};

export default MenuPage;
