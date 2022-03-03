import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

import { collection, getDocs, query, where } from "firebase/firestore";
import { useEffect, useState } from "react";

import { useUserAuth } from "../context/UserAuthContext";

const DriverOrders = () => {
  const [orders, setOrders] = useState();
  const myStyle = { fontFamily: "Bebas Neue" };

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
    textDecoration: "none",
  };

  console.log("orders drivewr dash", orders);
  return (
    <>
      <Container
        style={{
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          padding: "2%",
        }}
      >
        <h1 className="p-4 box text-center" style={myStyle}>
          Today's total deliveries: {orders?.length}
        </h1>

        <Row xs={1} md={4}>
          {orders?.map((order) => (
            <Col>
              <Card style={{ margin: "auto", marginBottom: "10px" }}>
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
                    <strong>Pickup Location: </strong>
                    <br></br>
                    <span>123 Kitchen Address</span>
                    <br></br>

                    <strong>Drop-Off Location: </strong>
                    <br></br>
                    <span>{order.customerAddress}</span>
                    <br></br>
                    <Button>
                      <Card.Link href="#" style={linkStyle}>
                        Get Directions
                      </Card.Link>
                    </Button>
                  </Card.Footer>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default DriverOrders;
