import React from "react";
import background from "../components/landingimage/wood.jpg";

import RestoOrdersView from "../components/restaurant/RestoOrdersView";

const RestoOrdersViewPage = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
        height: "100%",
      }}
    >
      <RestoOrdersView />
    </div>
  );
};

export default RestoOrdersViewPage;
