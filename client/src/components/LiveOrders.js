import {
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

const LiveOrders = () => {
  const { db, user } = useUserAuth();

  const [orders, setOrders] = useState();

  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(
          collRef,
          where("customerId", "==", user.uid),
          orderBy("orderTime")
        );
        const querySnapshot = await getDocs(q);
        console.log("querySnapShot", querySnapshot);
        let newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setOrders(newData);
        console.log("Order history: ", newData);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getData();
  }, [user.uid]);

  if (orders) {
    return <div>Order History listed in console</div>;
  } else {
    return <div>Loading...</div>;
  }
};

export default LiveOrders;
