import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import ListSubheader from "@mui/material/ListSubheader";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "../icon/HomeIcon";
import KitchenIcon from "../icon/KitchenIcon";

const RestoDisplayCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantsCollectionRef);
      console.log(data.docs);
      setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getRestaurants();
  }, []);
  console.log(restaurants);
  return (
    <ImageList sx={{ width: 600, height: 450 }} cols={2}>
      {restaurants.map((restaurant) => (
        <ImageListItem key={restaurant.photoURL}>
          <img
            src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
            srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={restaurant.name}
            loading="lazy"
          />
          <ImageListItemBar
            title={restaurant.name}
            subtitle={restaurant.description}
            actionIcon={
              <IconButton
                sx={{ color: "rgba(255, 255, 255, 0.54)" }}
                aria-label={`info about ${restaurant.name}`}
              >
                {restaurant.type === "Home" ? <HomeIcon /> : <KitchenIcon />}
              </IconButton>
            }
          />
        </ImageListItem>
      ))}
    </ImageList>
  );
};

export default RestoDisplayCard;
