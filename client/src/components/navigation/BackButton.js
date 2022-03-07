import { Button } from "@mui/material";
import React from "react";
import { Back } from "../icon/Back";

const BackButton = () => {
  return (
    <Button
      variant="primary"
      style={{
        color: "whitesmoke",
        backgroundColor: "#feaa00",
        borderColor: "#feaa00",
        padding: "0.25rem",
        margin: "1%",
        position: "absolute",
      }}
    >
      <Back style={{ textAlign: "center", width: "30px", height: "30px" }} />
      &nbsp;Back&nbsp;
    </Button>
  );
};

export default BackButton;
