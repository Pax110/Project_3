import React from "react";
import Wheel from 

function Wheel() {
  let container = document.querySelector(".container");
  let btn = document.getElementById("spin");
  let number = Math.ceil(Math.random() * 1000);

  btn.onclick = function () {
    container.style.transform = "rotate(" + number + "deg)";
    number += Math.ceil(Math.random() * 1000);
  };

  return <div></div>;
}


