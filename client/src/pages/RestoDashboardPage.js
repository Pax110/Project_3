import React from "react";
import RestoSelectMenu from "../components/restaurant/RestoSelectMenu";

//Need to add id and key to links

const RestoDashboardPage = () => {
  return (
    <div>  
      <h3>Restaurant Dashboard</h3>  
      <RestoSelectMenu />
    </div>
  );
};

export default RestoDashboardPage;
