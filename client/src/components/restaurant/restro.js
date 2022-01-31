import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";

function RestroList(menu) {
  return (
    <div>
      {menu.restaurant.map((restaurant) => {
        return (
          <h3 key={restaurant.id} onClick={() => menu.menuClicked(menu)}>
            {restaurant?.menu?.menu?.appetizers?.name}
            {restaurant?.menu?.menu?.appetizers?.price}
          </h3>
        );
      })}
    </div>
  );
}

export default RestroList;
