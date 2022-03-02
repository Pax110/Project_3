import React from "react";
import background from "../landingimage/spin.jpg";
import { useState, useEffect } from "react";
import { useFirebase } from "../FirebaseProvider";
import { collection, getDocs } from "firebase/firestore";
import { Link } from "react-router-dom";
import { HomeIcon } from "../icon/HomeIcon";
import { KitchenIcon } from "../icon/KitchenIcon";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import IconButton from "@mui/material/IconButton";
import { CardMedia, Container } from "@mui/material";
import { Dice } from "../icon/Dice";

const RestoDisplayCard = () => {
  const { db } = useFirebase();
  const [restaurants, setRestaurants] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");
  // let docRef = doc(db, "restaurants", restaurants.uid);
  // console.log(`docRef is ${JSON.stringify(docRef)}`);

  const myStyle = { fontFamily: "Bebas Neue" };

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
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
      }}
    >
      <h1 className="p-4 box mt-3 text-center" style={myStyle}>
        Browse Local Cuisines
      </h1>
      <ImageList cols={4}>
        {restaurants.map((restaurant) => (
          <Link to={`/menu/${restaurant.DOC_ID}`} key={restaurant.DOC_ID}>
            <ImageListItem onClick={() => {}} key={restaurant.photoURL}>
              <CardMedia
                component="img"
                height="250"
                src={`${restaurant.photoURL}`}
                srcSet={`${restaurant.photoURL}`}
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
                    {restaurant.type === "Home" ? (
                      <HomeIcon />
                    ) : (
                      <KitchenIcon />
                    )}
                  </IconButton>
                }
              />
            </ImageListItem>
          </Link>
        ))}
        <ImageListItem>
          <CardMedia
            component="img"
            height="250"
            src={`${background}`}
            loading="lazy"
          />
          <ImageListItemBar
            title="I'm Feeling Lucky!"
            subtitle="Click for random selection."
            actionIcon={
              <IconButton sx={{ color: "rgba(255, 255, 255, 0.54)" }}>
                <Dice />
              </IconButton>
            }
          />
        </ImageListItem>
      </ImageList>
      <br />
    </Container>
  );
};

export default RestoDisplayCard;
