import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import {
  doc,
  getDoc,
  collection,
  orderBy,
  query,
  getDocs,
} from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";

const RestoMenuEdit = () => {
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState([]);
  const menu = { appetizers: [] };

  const getMenuData = async () => {
    try {
      let collRef = collection(db, "restaurants");
      let queryRef = query(collRef, orderBy("name"));
      let querySnap = await getDocs(queryRef);
      if (querySnap.empty) {
        console.log("No docs found");
      } else {
        let menuData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setRestaurant(menuData);
        console.log(menuData);
      }
    } catch (ex) {
      console.log("Firestore failure!", ex.message);
    }
  };

  //   useEffect(() => {
  //     const getRestaurant = async () => {
  //       const restaurantsDocRef = doc(db, "restaurants", id);
  //       console.log("about to get doc");
  //       const data = await getDoc(restaurantsDocRef);
  //       console.log("got data");
  //       console.log(data.data());
  //       setRestaurant(data.data());
  //     };
  //     getRestaurant();
  //   }, []);
  //   if (id == null) return null;
  //   if (!restaurant.name) return null;
  //   console.log(restaurant);

  return (
    // <div>
    //   <h1>Appetizers:</h1>
    //   {menu.menu.appetizers.map(
    //     (item) => <p>Name: {item.name} <br/> Price: ${item.price}</p>
    //   )}
    // </div>
    <div>
      <button onClick={() => getMenuData()}>GET DATA</button> <br />
      {restaurant.map((item) => {
        return (
          <ul>
            <li> Menu: </li>
            <li> Appetizers: {JSON.stringify(item.menu.appetizers)}</li>
            <li> Mains: {JSON.stringify(item.menu.mains)}</li>
            <li> Desserts: {JSON.stringify(item.menu.desserts)}</li>
            <li>docId: {item.DOC_ID}</li>

            <hr />
          </ul>
        );
      })}
    </div>
  );
};

export default RestoMenuEdit;
