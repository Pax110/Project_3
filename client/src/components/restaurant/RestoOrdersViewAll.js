import React, { useState } from "react";
import { Card, Col, Row } from "react-bootstrap";

const RestoOrdersViewAll = ({ orders }) => {
  const myStyle = { fontFamily: "Bebas Neue" };
  return (
    <div>
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
                    {order.orderStatus === "Complete" ? <strong style={{color: "green"}}>{order.orderStatus}</strong>
                    :
                    <strong style={{color: "red"}}>{order.orderStatus}</strong>}
                    <br />
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
