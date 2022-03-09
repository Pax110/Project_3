import { Button } from "@mui/material";
import { Link } from "react-router-dom";
import React from "react";
import background from "../landingimage/donut.jpg";
import BackButton from "../navigation/BackButton";
import { style } from "@mui/system";

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
      <div
        style={{
          padding: "40px",
          position: "relative",
          margin: "20px 0 0 0",
          height: "300px",
          width: "1100px",
        }}
      >
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>
          <BackButton />
        </Link>
        <div
          style={{
            width: "500px",
            marginLeft: "auto",
            marginRight: "auto",
            position: "absolute",
          }}
        >
          <iframe
            style={{
              marginBottom: "1.75em",
              marginLeft: "auto",
              marginRight: "auto",
            }}
            src="https://drive.google.com/file/d/1JpjZP8if2OXLPN0DgOxABT-j_ldQpCSv/preview"
            width="700"
            height="1000"
            allow="autoplay"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default OnePager;
