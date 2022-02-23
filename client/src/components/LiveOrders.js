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
import { Button, Card } from "react-bootstrap";

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
    return (
      <>
        <div>
          {orders.map((order) => (
            <Card>
              <Card.Header>Restaurant Name</Card.Header>
              <Card.Body>
                <Card.Title>Your Order</Card.Title>
                <Card.Text>
                  {order.orderItems.map((item) => (
                    <>
                      <span>{item.name}</span>
                      <span> </span>
                      <span>x</span>
                      <span> </span>
                      <span>{item.qty}</span><br></br>
                      <span style={{fontStyle: "italic"}}>${item.price}</span>
                      <br></br>
                    </>
                  ))}
                  <hr></hr>
                  <span>Order Total: $</span>
                  <span style={{fontStyle: "italic"}}>{order.orderTotal}</span>
                </Card.Text>
                <Button variant="primary">Print Receipt</Button>
              </Card.Body>
            </Card>
          ))}
        </div>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default LiveOrders;
