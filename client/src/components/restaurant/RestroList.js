import { getDoc } from "@firebase/firestore";
import React from "react";

function RestroList() {
  let restroRef = doc(db, `restaurants/${id}`);
  let restoSnap = await getDoc(restroRef);
}
if (restoSnap.exists()) {
  let data = restoSnap.data();
  setRestaurant(data);
} else {
  console.log("Sorry, that resturant does not exist", id);
}

export default RestroList;
