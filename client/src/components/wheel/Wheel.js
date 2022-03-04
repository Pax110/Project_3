import React, { Component } from "react";
import WheelComponent from "react-wheel-of-prizes";

const Wheel = () => {
  const segments = [
    "Glazed & Confused",
    "Crumbs",
    "Muffet's Muffins",
    "Sip a Soup",
    "I Got Cake",
    "Baba's Perogies",
    "Ketolicious",
    "Ruby's Emporium",
    "British Bangers",
    "Good Noodle",
    "Gilded Wiener",
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
    "#F9AA1F",
    "#EC3F3F",
    "#FF9000",
  ];
  const onFinished = (winner) => {
    console.log(winner);
  };
  return (
    <WheelComponent
      segments={segments}
      segColors={segColors}
      winningSegment="won 10"
      onFinished={(winner) => onFinished(winner)}
      primaryColor="black"
      contrastColor="white"
      buttonText="Spin"
      isOnlyOnce={false}
      size={200}
      upDuration={100}
      downDuration={1000}
      fontFamily="Arial"
    />
  );
};
export default Wheel;
