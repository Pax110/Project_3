import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

import { Container, Row, Col } from "react-bootstrap";
import { Button, CardActionArea, CardMedia } from "@mui/material";
import { useFirebase } from "../FirebaseProvider";
import "../fonts/fonts.css";
import { prodErrorMap } from "firebase/auth";
import SingleItem from "./SingleItem";
import { CartState } from "../context/CartProvider";

// import { RestroDisplayList } from "./MenuDisplayList";
// import Toast from "./Toast";

// GOAL:accept only the 1 restro and display all of the menu items for that id
//make menu an array , map it out
//add pics

const MenuDisplayCard = () => {
  const { id } = useParams();
  console.log(id);
  const [restaurant, setRestaurant] = useState({});
  const { db } = useFirebase();
  const {
   
    itemState: { byAsapDelivery, byBookedDelivery, byRating, bySearchQuery },
  } = CartState();

  const transformItems =  () => {
    let sortedItems = restaurant.menu.appetizers
    if(bySearchQuery){
      sortedItems = sortedItems.filter((item) =>
        item.name.toLowerCase().includes(bySearchQuery)
      );
    }
    console.log("sorted..", sortedItems)
    return sortedItems
  }

  useEffect(() => {
    const getRestaurant = async () => {
      const restaurantsDocRef = doc(db, "restaurants", id);

      const data = await getDoc(restaurantsDocRef);

      console.log(data.data());
      setRestaurant(data.data());
    };
    getRestaurant();
  }, [id]);
  if (id == null) return null;
  if (!restaurant.name) return null;
  console.log(restaurant);

  const title = restaurant.name.toUpperCase();
  

  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
  };

  return (
    <>
      <Container
        style={{
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          padding: "15px",
          paddingRight: "50px",
          textDecoration: "none",
        }}
      >
        <h1 style={myStyle}>{title}</h1>
        <Col>
          <Row style={{ margin: "10px" }}>
            <CardActionArea
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                display: "flex",
                flexWrap: "wrap",
                margin: "15px",
                gap: "5px",
              }}
            >
              <h3 style={myStyle}>Appetizers</h3>
              {restaurant.menu.appetizers.map((item) => (
                <ImageListItem
                  sx={{ width: "220px", height: "220px", margin: "20px" }}
                >
                  <SingleItem restaurant={restaurant} restoId={id} item={item} key={item.name} />
                </ImageListItem>
              ))}
            </CardActionArea>
          </Row>
        </Col>

        <Col>
          <Row style={{ margin: "10px" }}>
            <CardActionArea
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                display: "flex",
                flexWrap: "wrap",
                margin: "15px",
                gap: "5px",
              }}
            >
              <h3 style={myStyle}>Mains</h3>
              {restaurant.menu.mains.map((item) => (
                <ImageListItem
                  sx={{ width: "220px", height: "220px", margin: "20px" }}
                >
                  <SingleItem item={item} key={item.name} />
                </ImageListItem>
              ))}
            </CardActionArea>
          </Row>
        </Col>

        <Col>
          <Row style={{ margin: "10px" }}>
            <CardActionArea
              style={{
                backgroundColor: "white",
                borderRadius: "15px",
                display: "flex",
                flexWrap: "wrap",
                margin: "15px",
                gap: "5px",
              }}
            >
              <h3 style={myStyle}>Desserts</h3>
              {restaurant.menu.desserts.map((item) => (
                <ImageListItem
                  sx={{ width: "220px", height: "220px", margin: "20px" }}
                >
                  <SingleItem item={item} key={item.name} />
                </ImageListItem>
              ))}
            </CardActionArea>
          </Row>
        </Col>
      </Container>
    </>
  );
};
export default MenuDisplayCard;
