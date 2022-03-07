import React from "react";
import logo from "./food.gif";

const myStyle = {
  fontFamily: "Bebas Neue",
  color: "whitesmoke",
  position: "absolute",
  top: "20%",
  left: "47%",
};

const LoadingScreen = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${logo})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingLeft: "325px",
        maxWidth: "100%",
        height: "110vh",
        marginTop: "-350px",
      }}
    >
      <h1 style={myStyle}>Loading ...</h1>
    </div>
  );
};

export default LoadingScreen;
