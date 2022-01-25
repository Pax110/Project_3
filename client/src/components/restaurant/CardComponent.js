// pass props and states here for one restro
import React from "react";

const MenuItemCard = (props) => {
  const currentItem = props.item;

  return (
    <ul>
      <li>name: {currentItem.name}</li>
      <li>price: {currentItem.price}</li>
    </ul>
  );
};
const MenuCardComponent = () => {
  let menuItems = [
    //has to return the full array and display from fire base
    { name: "general curry", price: 5.45 },
    { name: "fries", price: 2.45 },
    { name: "pickles", price: 1.45 },
  ];

  return (
    <div>
      {menuItems.map((i) => {
        return (
          <div>
            <MenuItemCard item={i} />
          </div>
        );
      })}
    </div>
  );
};
export default MenuCardComponent;
