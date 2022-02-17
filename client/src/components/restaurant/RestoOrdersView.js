import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useParams } from "react-router-dom";

const LiveOrders = () => {
  const { db, user } = useUserAuth();

  const [orders, setOrders] = useState();
  const { id } = useParams();
  console.log("restoId",id)
  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(collRef, where("restaurantId", "==", id));
        const querySnapshot = await getDocs(q);
        console.log("querySnapShop",querySnapshot)
        console.log("querySnapShot", querySnapshot);
        let newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setOrders(newData);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getData();
  }, [user.uid]);

  return (
    <div>
      <div>Orders</div>
      <div>{JSON.stringify(orders)}</div>
      
    </div>
  );
};

export default LiveOrders;
