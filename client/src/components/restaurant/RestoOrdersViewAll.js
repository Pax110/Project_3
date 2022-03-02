import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RestoOrdersViewAll = ({ orders }) => {
  const myStyle = { fontFamily: "Bebas Neue" };

  const [status, setStatus] = useState("Completed");

  return (
    <div>
      {" "}
      <h1 className="p-4 box mt-3 text-center" style={myStyle}>
        Order Tracker
      </h1>
      {orders?.map((order) => (
        <>
          <div>
            <Card
              style={{
                width: "50rem",
                margin: "auto",
                marginBottom: "10px",
              }}
            >
              <Card.Body>
                <Row>
                  <Col>
                    <Card.Title>Order Number: {order.orderId}</Card.Title>
                    <span> Date: {order.orderDate}</span> <br />
                    <span> Time: {order.orderTime}</span> <br />
                  </Col>
                  <Col style={{ textAlign: "right" }}>
                    <strong>Status: </strong>
                    {status === "Completed" ? (
                      <div style={{ color: "green" }}>
                        <strong> {status}</strong>
                      </div>
                    ) : (
                      <div style={{ color: "red" }}>
                        <strong> {status}</strong> <br />
                      </div>
                    )}
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
        </>
      ))}
    </div>
  );
};

export default RestoOrdersViewAll;
