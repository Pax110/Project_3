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
import { Button, Card, Container } from "react-bootstrap";
import PrintReceipt from "./PrintReceipt";

const OrderHistory = () => {
  const { db, user } = useUserAuth();

  const [orders, setOrders] = useState();

  const myStyle = { fontFamily: "Bebas Neue" };

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
      <Container
        style={{
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          paddingBottom: "15px",
        }}
      >
        <h1 className="p-4 box mt-3 text-center" style={myStyle}>
          Order History
        </h1>
        {orders.map((order) => (
          <Card
            style={{ width: "50rem", margin: "auto", marginBottom: "10px" }}
          >
            <Card.Header>{order.restaurantName}</Card.Header>
            <Card.Body>
              <Card.Title>Your Order</Card.Title>
              <Card.Text>
                {order.orderItems.map((item) => (
                  <>
                    <span>{item.qty}&nbsp;</span>
                    <span>{item.name}&nbsp;</span>
                    <span>${item.price}</span>
                    <br></br>
                  </>
                ))}
                <br />
                <strong>Order Total: ${order.orderTotal}</strong>
              </Card.Text>
              <PrintReceipt items={order.orderItems} restaurantName={order.restaurantName} total={order.orderTotal}/>
            </Card.Body>
          </Card>
        ))}
      </Container>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default OrderHistory;
