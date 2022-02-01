import { collection, getDocs, query, where } from "firebase/firestore";
import React from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();

  const getData = async () => {
    let restoRef = collection(db, "restaurants");
    let q = query(restoRef, where("ownerUid", "==", user.uid));
    let querySnap = await getDocs(q);
    console.log(q);
    console.log("the restos we own are:");
    querySnap.forEach((doc) => {
      let restoData = doc.data();
      console.log(`name: ${restoData.name}`);
    });
  };
  return (
    <div>
      <button
        variant="primary"
        type="button"
        onClick={() => {
          console.log("clicked");
          getData();
        }}
      >
        Press here for data
      </button>
    </div>
  );
};
export default RestoSelectMenu;
