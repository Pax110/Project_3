import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";

const RestoDisplayCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantsCollectionRef);
      setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRestaurants();
  }, []);

  return (
    <div>
      {restaurants.map((restaurant) => {
        return (
          <div>
            <h1>Type: {restaurant.type}</h1>
            <h1>Name: {restaurant.name}</h1>
            <h1>Food Category: {restaurant.foodCategory}</h1>
            <h1>Description: {restaurant.description}</h1>
          </div>
        );
      })}
    </div>
  );
};

export default RestoDisplayCard;
