import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

const LiveOrders = () => {
  const { db, user } = useUserAuth();
  let collRef = collection(db, "orders");
  let docRef = doc(collRef, user.uid);
  const [orders, setOrders] = useState();

 

    useEffect(()=>{
      
      const getData = async  () =>{
        
        try {
          const q = query(docRef, where("user.uid", "==", user.uid));
          const querySnapshot = await getDocs(q);
          console.log("querySnapShot", querySnapshot);
          setOrders(querySnapshot.data())
        
        } catch (e) {
          console.log("error", e.message);
        }


      }

      getData()

    },[user.uid])

    
    
    
    
    
  return <div>{JSON.stringify(orders)}</div>;
};

export default LiveOrders;
