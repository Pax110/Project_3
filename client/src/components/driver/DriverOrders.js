import React from "react";
import { Button, Card, Col, Container, Row } from "react-bootstrap";
import {
  collection,
  doc,
  getDocs,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import LoadingScreen from "../navigation/LoadingScreen";
import { ImCheckmark2 } from "react-icons/im";

const DriverOrders = () => {
  const [orders, setOrders] = useState();
  const myStyle = { fontFamily: "Bebas Neue" };
  const { db, user } = useUserAuth();

  const dateToday = new Date().toDateString();

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

  const handleDeliver = async (ID) => {
    try {
      let collRef = collection(db, "orders");
      console.log("collRef", collRef);
      let docRef = doc(collRef, ID);
      console.log("docRef", docRef);
      await setDoc(docRef, { orderStatus: "Complete" }, { merge: true });
    } catch (e) {
      console.log("error at handleComplete..", e.message);
    }
  };
  console.log("orders driver dash", orders);
  if (orders) {
    return (
      <>
        <Container
          style={{
            width: "auto",
            backgroundColor: "#f7f4ef",
            borderRadius: "15px",
            padding: "2%",
            overflowY: "auto",
            height: "100vh",
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
                    <Button
                      variant="success"
                      style={{ margin: "10px", width: "auto" }}
                      onClick={() => handleDeliver(order.DOC_ID)}
                    >
                     

                      <ImCheckmark2 style={{margin: "3px"}}/>
                     
                      Mark Delivered
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </>
    );
  } else {
    return <LoadingScreen />;
  }
};

export default DriverOrders;
