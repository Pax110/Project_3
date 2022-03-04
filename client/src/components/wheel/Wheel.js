import React, { Component, useState, useEffect } from "react";
import WheelComponent from "react-wheel-of-prizes";
import { useFirebase } from "../FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";

//get data from server, segemtns set segemtns to be an array,
const Wheel = ({ restaurant }) => {
  const [segments, setSegments] = useState();

  const { db } = useFirebase();
  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantsCollectionRef = collection(db, "restaurants");
      const querySnap = await getDocs(restaurantsCollectionRef);
      let restonames = querySnap.docs.map((docSnap) => docSnap.data().name);
      setSegments(restonames);
    };

    getRestaurants();
  }, [db]);

  console.log("resto is:", restaurant);
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

  if (!segments) {
    return "LOADING";
  }
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
      size={250}
      upDuration={100}
      downDuration={1000}
      fontFamily="Arial"
    />
  );
};
export default Wheel;
