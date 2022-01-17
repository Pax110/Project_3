import React from "react";
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import { HomeIcon } from "../icon/HomeIcon";
import { BuildingShop } from "@styled-icons/fluentui-system-filled";



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
    <ImageList sx={{ width: 500, height: 450 }}>
      <ImageListItem key="Subheader" cols={2}>
        <ListSubheader component="div">Restaurant List</ListSubheader>
      </ImageListItem>
  
      {restaurants.map((restaurant) => (
              <ImageListItem key={restaurant.photo}>
              <img
                src={`${restaurant.photo}?w=248&fit=crop&auto=format`}
                srcSet={`${restaurant.photo}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={restaurant.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={restaurant.name}
                subtitle={restaurant.description}
                actionIcon={
                  <IconButton
                    sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                    aria-label={`info about ${restaurant.name}`}
                  >
                    <HomeIcon/>
                  </IconButton>
                }
              />
            </ImageListItem>
          ))};
        </ImageList>
      );
    }
    

export default RestoDisplayCard;
