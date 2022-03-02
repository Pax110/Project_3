import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";

import ImageListItem from "@mui/material/ImageListItem";

import { Container, Row, Col } from "react-bootstrap";
import { CardActionArea } from "@mui/material";
import { useFirebase } from "../FirebaseProvider";
import "../fonts/fonts.css";
import AboutMeChef from "./aboutmechef/AboutMeChef";

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

  const transformItems = (category) => {

    let sortedItems = category;
    if (bySearchQuery) {
      sortedItems = sortedItems.filter((item) =>
        item.name.toLowerCase().includes(bySearchQuery.toLowerCase())
      );
    }
    console.log("sorted..", sortedItems);
    return sortedItems;
  };

  const appetizers = restaurant.menu?.appetizers
  const mains = restaurant.menu?.mains
  const desserts = restaurant.menu?.desserts
  const a = transformItems(mains)
  console.log("a is",a)
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
  const displayItem = (item) => (
    <ImageListItem sx={{ width: "220px", height: "220px", margin: "20px" }}>
      <SingleItem
        restaurant={restaurant}
        restoId={id}
        item={item}
        key={item.name}
      />
    </ImageListItem>
  );

  return (
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
      <AboutMeChef restaurant={restaurant} />
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
            {transformItems(appetizers).map(displayItem)}
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
            {transformItems(mains).map(displayItem)}
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
            {transformItems(desserts).map(displayItem)}
          </CardActionArea>
        </Row>
      </Col>
    </Container>
  );
};
export default MenuDisplayCard;
