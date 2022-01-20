import * as React from 'react';
import { useState, useEffect } from "react";
import { db } from "../firebase";
import { collection, getDocs } from "firebase/firestore";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


const MenuDisplayCard = () => {
    const [restaurants, setRestaurants] = useState([]);
    const restaurantsCollectionRef = collection(db, "restaurants");

    useEffect(() => {
        const getRestaurants = async () => {
          const data = await getDocs(restaurantsCollectionRef);
          console.log(data.docs)
          setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
        };
        getRestaurants();
      }, []);
    console.log(restaurants)


  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="menu-item"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
export default MenuDisplayCard;