import { stepLabelClasses } from "@mui/material";
import { collection, doc, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";

const DriverDash = () => {
  const [orders, setOrders] = useState();

  const dateToday = new Date().toDateString();
  const { db, user } = useUserAuth();

  useEffect(() => {
    const getOrdersData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(collRef, where("orderDate", "==", dateToday));
        const querySnapshot = await getDocs(q);
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

    getOrdersData();
  }, [user.uid]);

  console.log("orders drivewr dash", orders);


  if(orders){
    return (
        <>
          <div>DriverDash</div>
          <div>Google map Api </div>
          
    
            {orders?.map((order)=>(
                <Card style={{ width: "18rem" }}>
                <Card.Body>
                  <Card.Title>Order Number: {order.orderId}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                   <span>Delivery Type: {order.deliveryType}</span><br></br>
                   <span>Expected delivery time: {order.orderTime}</span>
                  </Card.Subtitle>
                  <Card.Text>
                   <span>Customer Name: {order.customerName}</span><br></br>
                   <span>Customer Contact: {order.customerPhone}</span>
                  </Card.Text>
                  <span>Pickup Location: </span><br></br>
                  <span>123 Kitchen Address</span>
                  <Card.Link href="#">Open maps</Card.Link><br></br>
                  <span>Dropfff Location: </span><br></br>
                  <span>{order.customerAddress}</span>
                  <Card.Link href="#">Open maps</Card.Link>
                </Card.Body>
              </Card>
            ))}
    
    
    
    
          
        </>
      );

  }else{
      return (<div>Loading ...</div>)
  }
  
};

export default DriverDash;
