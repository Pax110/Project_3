// // pass props and states here for one restro
// import React from "react";
// import { db } from "../firebase";
// import { useState, useEffect } from "react";

// const restoMenuFunction = () => {
//   const [restaurants, setRestaurants] = useState([]);
//   const { collection, getDocs } = require("firebase/firestore");
//   const restaurantsCollectionRef = collection(db, "restaurants");

//   useEffect(() => {
//     const getRestaurants = async () => {
//       const data = await getDocs(restaurantsCollectionRef);
//       console.log(data.docs);
//       setRestaurants(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
//     };
//     getRestaurants();
//   }, []);
//   console.log(restaurants);

//   const MenuItemCard = (restaurants) => {
//     const menuItemName = restaurants?.menu?.menu?.appetizers?.name;
//     const menuItemPrice = restaurants?.menu?.menu?.appetizers?.price;

//     return (
//       <ul>
//         <li>name: {menuItemName.name}</li>
//         <li>price: {menuItemPrice.price}</li>
//       </ul>
//     );
//   };
//   const MenuCardComponent = () => {
//     let menuItems = [
//       //has to return the full array and display from fire base
//       { name: "general curry", price: 5.45 },
//       { name: "fries", price: 2.45 },
//       { name: "pickles", price: 1.45 },
//     ];

//   return (
//     <div>
//       {menuItems.map((i) => {
//         return (
//           <div>
//             <MenuItemCard item={i} />
//           </div>
//         );
//       })}
//     </div>
//   );
// };
// export default MenuCardComponent;
