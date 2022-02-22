import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useParams } from "react-router-dom";
import { Button, Card, ListGroup } from "react-bootstrap";

const LiveOrders = () => {
  const { db, user } = useUserAuth();

  const [orders, setOrders] = useState();
  const { id } = useParams();
  console.log("restoId", id);
  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(collRef, where("restaurantId", "==", id));
        const querySnapshot = await getDocs(q);
        console.log("querySnapShop", querySnapshot);
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
  console.log("orders..", orders);

  const orderStyle = {
    display: "flex",
  };

  if (orders) {
    return (
      <div>
        {orders.map((order) => (
          <div>
            <Card>
              <Card.Body>
                <Card.Title>Order Number: {order.orderId}</Card.Title>
                <Card.Text>
                {order.orderItems.map((item) => (
                    <>
                      <span>{item.name}</span>
                      <span> x </span>
                      <span>{item.qty}</span><br></br>
                      
                      
                    </>
                  ))}
                  <hr></hr>
                  <p>Order Total: ${order.orderTotal}</p>
                </Card.Text>
              </Card.Body>
            </Card>

            {/* <Card>
              <Card.Header>{order.DOC_ID}</Card.Header>
              <Card.Body>
                <Card.Title> Order Number: {order.orderId}</Card.Title>
                <Card.Text>
                {order.orderItems.map((item) => (
                    <>
                      <span>{item.name}</span><br></br>
                      
                    </>
                  ))}
                  <p>Order Total: ${order.orderTotal}</p>
                </Card.Text>
              </Card.Body>
            </Card> */}
          </div>
        ))}
      </div>
    );
  } else {
    return (
      <>
        <div>No orders yet..We'll celebrate your first order together!</div>
      </>
    );
  }
};

export default LiveOrders;
