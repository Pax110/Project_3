import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useParams } from "react-router-dom";
import { Button, Card, Col, ListGroup, Nav, NavDropdown, Row } from "react-bootstrap";
import { Container } from "@mui/material";

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

  const myStyle = { fontFamily: "Bebas Neue" };

  const handleSelect = () => {
    console.log("some link selected")
  }
  if (orders) {
    return (<>
     
      <Container
        style={{
          width: "auto",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
          paddingBottom: "15px",
          overflowY: "auto",
          maxHeight: "800px",
        }}
      >
         <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          NavLink 1 content
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          NavLink 2 content
        </Nav.Link>
      </Nav.Item>
     
      <NavDropdown title="Dropdown" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
        <h1 className="p-4 box mt-3 text-center" style={myStyle}>
          Order Tracker
        </h1>
        {orders.map((order) => (
          <div>
            <Card
              style={{ width: "50rem", margin: "auto", marginBottom: "10px" }}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Order Number: {order.orderId}</Card.Title>
                    <span> Date: {order.orderDate}</span> <br />
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <strong>Status: Pending</strong> <br />
                    <strong>Delivery Type: {order.deliveryType}</strong> <br />
                  </Col>
                </Row>
                <Card.Text>
                  Items: <br />
                  {order.orderItems.map((item) => (
                    <>
                      <span>{item.qty}</span>
                      <span> x </span>
                      <span>{item.name}</span>
                      <br></br>
                    </>
                  ))}
                  <hr></hr>
                  <p>Order Total: ${order.orderTotal}</p>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        ))}
      </Container>
      </>);
  } else {
    return (
      <>
        <div>No orders yet..We'll celebrate your first order together!</div>
      </>
    );
  }
};

export default LiveOrders;
