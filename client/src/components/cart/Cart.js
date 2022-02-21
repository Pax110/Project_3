import { Container } from "@mui/material";
import { addDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Button, Col, Form, Image, ListGroup, Row } from "react-bootstrap";
import { AiFillDelete } from "react-icons/ai";
import { CartState } from "../context/CartProvider";
import { userAuthContext, useUserAuth } from "../context/UserAuthContext";
// import Rating from "./Rating";

const Cart = () => {
  const {
    state: { cart },
    dispatch,
  } = CartState();
  const [total, setTotal] = useState(null);

  const { db, user } = useUserAuth();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    console.log("cart value",cart)
  }, [cart]);

  const handleOrder = async () => {
    alert("Payment Successful. Thank you!");
    try {
      let collRef = collection(db, "orders");

      await addDoc(collRef, {
        customerId: user.uid,
        orderId: "123",
        deliveryType: "ASAP",
        orderTime: new Date(),
        orderTotal: countTotal(total, countTax(total)),
        restaurantId: "2oRIUm3DYeiesWr2LBeZ",
        userLocation: "t3q4w1",
        orderItems: cart
      });
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const countTax = (i) => {
    return i * (0.05).toFixed(2);
  };

  const countTotal = (i,j) => {
    return (i + j).toFixed(2)
  }
  const myStyle = {
    fontFamily: "Bebas Neue",
    textAlign: "center",
    textDecoration: "none",
    paddingBottom: "10px",
  };

  const otherStyle = {
    fontFamily: "Roboto",
    textAlign: "left",
    textDecoration: "none",
    overflow: "visible",
  };

  if (total) {
    return (
      <>
        <div className="home">
          <Container
            style={{
              display: "flex",
              width: "auto",
              maxWidth: "none",
              backgroundColor: "#f7f4ef",
              borderRadius: "15px",
              padding: "15px",
              paddingRight: "50px",
              textDecoration: "none",
              justifyContent: "center",
            }}
          >
            <Row>
              <h1 style={myStyle}>Order Summary</h1>
              <div className="productContainer" style={otherStyle}>
                <ListGroup>
                  {cart.map((item) => (
                    <ListGroup.Item key={item.name}>
                      <Row>
                        <Col md={2}>
                          <Image
                            src={item.menuphoto}
                            alt={item.name}
                            rounded
                            thumbnail
                          />
                        </Col>
                        <Col md={2}>
                          <span>{item.name}</span>
                        </Col>
                        <Col md={2}>$ {item.price}</Col>
                        <Col md={2}>
                          {/* <Rating rating={prod.ratings} /> */}
                        </Col>
                        <Col md={2}>
                          <Form.Control
                            as="select"
                            value={item.qty}
                            onChange={(e) =>
                              dispatch({
                                type: "CHANGE_CART_QTY",
                                payload: {
                                  name: item.name,
                                  qty: e.target.value,
                                },
                              })
                            }
                          >
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                          </Form.Control>
                        </Col>
                        <Col md={2}>
                          <Button
                            type="button"
                            variant="light"
                            onClick={() =>
                              dispatch({
                                type: "REMOVE_FROM_CART",
                                payload: item,
                              })
                            }
                          >
                            <AiFillDelete fontSize="20px" />
                          </Button>
                        </Col>
                      </Row>
                    </ListGroup.Item>
                  ))}
                </ListGroup>
              </div>
              <div className="filters summary">
                <span className="title"> {cart.length} Items In Cart</span>
                <span style={{ fontWeight: 400, fontSize: 20 }}>
                  Subtotal: ${total.toFixed(2)} <br />
                  GST: ${countTax(total).toFixed(2)} <br />
                  <br />
                  <span className="title">
                    Total: ${countTotal(total, countTax(total))}
                  </span>
                  <br /> <br />
                  Thank you for your order!
                </span>
                <Button
                  type="button"
                  disabled={cart.length === 0}
                  onClick={handleOrder}
                >
                  Proceed to Checkout
                </Button>
              </div>
            </Row>
          </Container>
        </div>
      </>
    );
  } else {
    return <div>Cart is empty.</div>;
  }
};

export default Cart;
