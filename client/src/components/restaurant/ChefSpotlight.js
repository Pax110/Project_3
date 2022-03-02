import { Card, Container } from "@mui/material";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../FirebaseProvider";

const ChefSpotlight = () => {
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");

  const [chef, setChef] = useState(null);

  const myStyle = { fontFamily: "Bebas Neue" };

  useEffect(() => {
    const getRestaurants = async () => {
      const querySnapshot = await getDocs(restaurantsCollectionRef);
      let newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));
      setRestaurant(newData);
    };
    getRestaurants();
  }, []);

  let length = restaurant.length;
  let random = Math.floor(Math.random() * length);

  useEffect(() => {
    setChef(random);
  }, [random]);

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

        {chef != null && <div>{restaurant[chef]?.name}</div>}
      </Container>
    );
  }
};

export default ChefSpotlight;
