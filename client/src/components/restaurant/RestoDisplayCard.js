import React from "react";
import background from "../landingimage/food1.jpg";
import { useState, useEffect } from "react";
import { useFirebase } from "../FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "../icon/HomeIcon";
import KitchenIcon from "../icon/KitchenIcon";
import { CardMedia, Container } from "@mui/material";

const RestoDisplayCard = () => {
  const { db } = useFirebase();
  const [restaurants, setRestaurants] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");
  // let docRef = doc(db, "restaurants", restaurants.uid);
  // console.log(`docRef is ${JSON.stringify(docRef)}`);

  useEffect(() => {
    const getRestaurants = async () => {
      const data = await getDocs(restaurantsCollectionRef);

      setRestaurants(
        data.docs.map((doc) => ({ ...doc.data(), DOC_ID: doc.id }))
      );
    };

    getRestaurants();
  }, []);

  return (
    <Container
      style={{
        width: "auto",
        backgroundColor: "rgba(254, 170, 0, 0.6)",
      }}
    >
      <h1 className="p-4 box mt-3 text-center">Browse Local Cuisines</h1>
      <ImageList cols={4}>
        {restaurants.map((restaurant) => (
          <Link to={`/menu/${restaurant.DOC_ID}`} key={restaurant.DOC_ID}>
            <ImageListItem onClick={() => {}} key={restaurant.photoURL}>
              <CardMedia
                component="img"
                height="250"
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
                    <HomeIcon />
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
        ))}
      </ImageList>
    </Container>
  );
};

export default RestoDisplayCard;
