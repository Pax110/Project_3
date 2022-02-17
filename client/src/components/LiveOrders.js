import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "./context/UserAuthContext";

const LiveOrders = () => {
  const { db, user } = useUserAuth();
  
  const [orders, setOrders] = useState();

 

    useEffect(()=>{
      
      const getData = async  () =>{
        
        try {
          let collRef = collection(db, "orders");
         
          const q = query(collRef, where("customerId", "==", user.uid));
          const querySnapshot = await getDocs(q);
          console.log("querySnapShot", querySnapshot);
          let newData = querySnapshot.docs.map((doc) => ({
            ...doc.data(),
            DOC_ID: doc.id,
          }));
          setOrders(newData)
        
        } catch (e) {
          console.log("error", e.message);
        }


      }

      getData()

    },[user.uid])

    
    
    
    
    
  return <div>{JSON.stringify(orders)}</div>;
};

export default LiveOrders;
