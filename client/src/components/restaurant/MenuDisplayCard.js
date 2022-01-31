import * as React from "react";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import ImageListItemBar from "@mui/material/ImageListItemBar";
import { CardActionArea } from "@mui/material";
import { useFirebase } from "../FirebaseProvider";

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
  //   // // const [showToast, setShowToast] = useState(false);
  // const { collection, getDocs } = require("firebase/firestore");
  //   function RestroMenuList() {
  //     let restroRef = doc(db, `restaurants/${id}`);
  //     let restoSnap = await getDoc(restroRef);
  //   }
  //   if (restoSnap.exists()) {
  //     let data = restoSnap.data();
  //     setRestaurant(data);
  //   } else {
  //     console.log("Sorry, that resturant does not exist", id);
  //   }
  useEffect(() => {
    const getRestaurant = async () => {
      const restaurantsDocRef = doc(db, "restaurants", id);
      console.log("about to get doc");
      const data = await getDoc(restaurantsDocRef);
      console.log("got data");
      console.log(data.data());
      setRestaurant(data.data());
    };
    getRestaurant();
  }, []);
  if (id == null) return null;
  if (!restaurant.name) return null;
  console.log(restaurant);

  const addToCart = () => {
    alert("Item added to cart");
  };

  return (
    <ImageList cols={3}>
      <CardActionArea>
        <h3>Appetizers</h3>
        {restaurant.menu.appetizers.map((main) => (
          <Link to="#" onClick={addToCart}>
            <ImageListItem>
              <img
                src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
                srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={restaurant.name}
                loading="lazy"
              />

              <ImageListItemBar //build maps around every menu category
                title={main.name}
                subtitle={<span>Price: ${main.price}</span>}
                position="below"
              />
            </ImageListItem>
          </Link>
        ))}

        <ImageListItem key={restaurant.photoURL}>
          {/* <img
            src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
            srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={restaurant.name}
            loading="lazy"
          /> */}
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
          {/* <ImageListItemBar //build maps around every menu category
            title={restaurant?.menu?.menu?.appetizers?.name}
            subtitle={
              <span>price:{restaurant?.menu?.menu?.appetizers?.price}</span>
            }
            position="below"
          /> */}
        </ImageListItem>
      </CardActionArea>
      <CardActionArea>
        <h3>Mains</h3>
        {restaurant.menu.mains.map((main) => (
          <Link to="#" onClick={addToCart}>
            <ImageListItem>
              <img
                src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
                srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={restaurant.name}
                loading="lazy"
              />

              <ImageListItemBar //build maps around every menu category
                title={main.name}
                subtitle={<span>Price: ${main.price}</span>}
                position="below"
              />
            </ImageListItem>
          </Link>
        ))}

        <ImageListItem key={restaurant.photoURL}>
          {/* <img
            src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
            srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={restaurant.name}
            loading="lazy"
          /> */}
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
          {/* <ImageListItemBar //build maps around every menu category
            title={restaurant?.menu?.menu?.appetizers?.name}
            subtitle={
              <span>price:{restaurant?.menu?.menu?.appetizers?.price}</span>
            }
            position="below"
          /> */}
        </ImageListItem>
      </CardActionArea>
      <CardActionArea>
        <h3>Desserts</h3>
        {restaurant.menu.desserts.map((main) => (
          <Link to="#" onClick={addToCart}>
            <ImageListItem>
              <img
                src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
                srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={restaurant.name}
                loading="lazy"
              />

              <ImageListItemBar //build maps around every menu category
                title={main.name}
                subtitle={<span>Price: ${main.price}</span>}
                position="below"
              />
            </ImageListItem>
          </Link>
        ))}

        <ImageListItem key={restaurant.photoURL}>
          {/* <img
            src={`${restaurant.photoURL}?w=248&fit=crop&auto=format`}
            srcSet={`${restaurant.photoURL}?w=248&fit=crop&auto=format&dpr=2 2x`}
            alt={restaurant.name}
            loading="lazy"
          /> */}
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
          {/* <ImageListItemBar //build maps around every menu category
            title={restaurant?.menu?.menu?.appetizers?.name}
            subtitle={
              <span>price:{restaurant?.menu?.menu?.appetizers?.price}</span>
            }
            position="below"
          /> */}
        </ImageListItem>
      </CardActionArea>
      {/* )) */}
    </ImageList>
  );
};
export default MenuDisplayCard;
