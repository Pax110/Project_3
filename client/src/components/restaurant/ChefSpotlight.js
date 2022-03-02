import { Card, Container } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../FirebaseProvider";

const ChefSpotlight = () => {
  const { db } = useFirebase();
  const [chef, setChef] = useState(null);
  const [restaurant, setRestaurant] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");

  const myStyle = { fontFamily: "Bebas Neue" };

  console.log("resto issss", restaurant);
  console.log("chef issss", chef);

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantsCollectionRef);

      setRestaurant(
        data.docs.map((doc) => ({ ...doc.data(), DOC_ID: doc.id }))
      );
      const generateRandomIndex = (array) =>
        Math.floor(Math.random() * array.length);

      setChef(generateRandomIndex(restaurant));
    };
    getRestaurants();
  }, []);

  if (restaurant) {
    return (
      <Container
        style={{
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
        }}
      >
        <h1 className="p-4 box mt-3 text-center" style={myStyle}>
          Chef Spotlight
        </h1>
        {restaurant[chef]?.name}
        {restaurant[chef]?.contact.owner.firstName}
      </Container>
    );
  }
};

export default ChefSpotlight;
