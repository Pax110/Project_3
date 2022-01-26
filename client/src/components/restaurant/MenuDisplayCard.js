import * as React from "react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CardActionArea } from "@mui/material";
import Toast from "./Toast";

//onclick fetch?

const MenuDisplayCard = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [showToast, setShowToast] = useState(false);
  const { collection, getDocs } = require("firebase/firestore");
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
    <ImageList sx={{ width: 500, height: 450 }}>
      {restaurants.map((restaurant) => (
        <CardActionArea>
          <ImageListItem key={restaurant.photoURL}>
            <img
              src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
              srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={restaurant.name}
              loading="lazy"
            />
            {/* <Link>
              to={{ pathname: "/basket", restaurant: restaurant }}
              Add Item to Cart
            </Link> */}
            {/* <div>
              onClick=
              {() => {
                setShowToast(true);
                setTimeout(() => {
                  setShowToast(false);
                }, 1500);
              }}
            </div>
            {showToast && <Toast message="Sucessfully Added" />}
            {console.log(restaurant)} */}

            <ImageListItemBar //have a prop called resturant but do not pass it through the map and make it all display
              title={restaurant?.menu?.menu?.appetizers?.name}
              subtitle={
                <span>price:{restaurant?.menu?.menu?.appetizers?.price}</span>
              }
              position="below"
            />
          </ImageListItem>
        </CardActionArea>
      ))}
    </ImageList>
  );
};
export default MenuDisplayCard;
