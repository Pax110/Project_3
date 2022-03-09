import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import background from "../landingimage/donut.jpg";
import BackButton from "../navigation/BackButton";
import { style } from "@mui/system";
import image from "./CulinaryCollectivebyOpenSorcerers-1.jpg";

function OnePager() {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        //Photo by <a href="https://unsplash.com/@brookelark?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Brooke Lark</a> on <a href="https://unsplash.com/s/photos/rainbow-food?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>

        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <Link to="/" style={{ color: "white", textDecoration: "none" }}>
        <BackButton />
      </Link>
      <div
        style={{ display: "flex", justifyContent: "center", margin: "0 auto" }}
      >
        <img src={image} />
      </div>
    </div>
  );
}

export default OnePager;
