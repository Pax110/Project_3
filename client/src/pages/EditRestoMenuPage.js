import { doc, getDoc } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../components/context/UserAuthContext";
import EditRestoMenuForm from "../components/restaurant/EditRestoMenuForm";

const EditRestoMenuPage = () => {
  const { id } = useParams();
  const { db } = useUserAuth();
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
        }
      } catch (ex) {
        console.log("Firestore failure!", ex.message);
      }
    };
    if (id) {
      getMenuData();
    }
  }, []);

  if (restaurant) {
    return (
      <div>
        <h3>EditRestoMenuPage</h3>
        <div>{JSON.stringify(restaurant)}</div>

        <EditRestoMenuForm id={id} document={restaurant} />
      </div>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default EditRestoMenuPage;
