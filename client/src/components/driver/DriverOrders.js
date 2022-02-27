import React from "react";
import { Button, Card } from "react-bootstrap";

import { collection, doc, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useUserAuth } from "../context/UserAuthContext";

const DriverOrders = () => {
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
  const linkStyle = {
   textDecoration: 'none'
  }

  console.log("orders drivewr dash", orders);
  return (<>
    <div>
      <div>Today's total orders: ({orders?.length})</div>
      {orders?.map((order) => (
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Order Number: {order.orderId}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              <span>Delivery Type: {order.deliveryType}</span>
              <br></br>
              <span>Expected delivery time: {order.orderTime}</span>
            </Card.Subtitle>
            <Card.Text>
              <span>Customer Name: {order.customerName}</span>
              <br></br>
              <span>Customer Contact: {order.customerPhone}</span>
            </Card.Text>
            <Card.Footer>
              <span>Pickup Location: </span>
              <br></br>
              <span>123 Kitchen Address</span>
              <br></br>
              
              <span>Dropfff Location: </span>
              <br></br>
              <span>{order.customerAddress}</span>
              <br></br>
              <Button><Card.Link href="#" style={linkStyle}>Get Directions</Card.Link></Button>
            </Card.Footer>
          </Card.Body>
        </Card>
      ))}
    </div>
    </>);
};

export default DriverOrders;
