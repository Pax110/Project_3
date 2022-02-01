import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";

const RestoMenuEdit = () => {
  const { id } = useParams();
  console.log(id);
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState(null);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        let docRef = doc(db, "restaurants", id);
        let docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          console.log("No docs found");
        } else {
          let restoData = docSnap.data();
          restoData.DOC_ID = docSnap.id;
          setRestaurant(restoData);
          console.log(restoData);
        }
      } catch (ex) {
        console.log("Firestore failure!", ex.message);
      }
    };
    if (id) {
      getMenuData();
    }
  }, [id]);

  const ItemDisplay = (props) => {
    const item = props.item;
    return (
      <ul>
        <li>Name: {item.name}</li>
        <li>Price: ${item.price}</li>
      </ul>
    );
  };
  return (
    <div>
      <h3> Menu: </h3>
      <h3> Appetizers:</h3>
      {restaurant &&
        restaurant.menu.appetizers.map((i) => (
          <ItemDisplay key={i.name} item={i} />
        ))}
      <h3> Mains:</h3>
      {restaurant &&
        restaurant.menu.mains.map((i) => <ItemDisplay key={i.name} item={i} />)}
      <h3> Desserts:</h3>
      {restaurant &&
        restaurant.menu.desserts.map((i) => (
          <ItemDisplay key={i.name} item={i} />
        ))}
      <h3>docId: {restaurant?.DOC_ID}</h3>

      <hr />
    </div>
  );
};

export default RestoMenuEdit;
