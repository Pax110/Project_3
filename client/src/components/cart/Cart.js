import { Container } from "@mui/material";
import { addDoc, collection, doc, getDoc, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import {
  Button,
  Col,
  Form,
  Image,
  ListGroup,
  Modal,
  Row,
} from "react-bootstrap";
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
  const [show, setShow] = useState(false);
  const [customerAddress, setCustomerAddress] = useState(null);
  const [customerName, setCustomerName] = useState(null);
  const [customerPhone, setCustomerPhone] = useState(null);
  const handleClose = () => {
    handleOrder();
    setShow(false);
  };
  const handleShow = () => setShow(true);

  const { db, user } = useUserAuth();

  const randomValue = Math.floor(1000 + Math.random() * 9000);

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    console.log("cart value", cart);
  }, [cart]);
  useEffect(() => {
    const getAddressData = async () => {
      try {
        const docRef = doc(db, "users", user.uid);

        const querySnapshot = await getDoc(docRef);

        const newData = querySnapshot.data();
        console.log("new Data", newData);
        const address = newData.address;
        const fullName = newData.firstName + " "+  newData.lastName;
        const phoneNumber = newData.phone;

        setCustomerAddress(address);
        setCustomerName(fullName);
        setCustomerPhone(phoneNumber);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getAddressData();
  }, []);

  const handleOrder = async () => {
    try {
      let collRef = collection(db, "orders");

      await addDoc(collRef, {
        customerId: user.uid,
        customerName: customerName,
        customerAddress: customerAddress,
        customerPhone: customerPhone,
        orderId: randomValue,
        deliveryType: "ASAP",
        orderDate: new Date().toDateString(),
        orderTime: new Date().toLocaleTimeString("en-US"),
        orderTotal: countTotal(total, countTax(total)),
        restaurantId: cart[0].restoId, //get the restoId from the state
        userLocation: "t3q4w1",
        orderItems: cart,
        restaurantName: cart[0].restoName, //make this dynamic after getting the restoId
      });
    } catch (e) {
      console.log("error", e.message);
    }
  };

  const countTax = (i) => {
    return i * (0.05).toFixed(2);
  };

  const countTotal = (i, j) => {
    return (i + j).toFixed(2);
  };
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
                  style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
                  disabled={cart.length === 0}
                  onClick={(handleOrder, handleShow)}
                >
                  Proceed to Checkout
                </Button>
                <Modal
                  show={show}
                  onHide={handleClose}
                  keyboard={false}
                  centered
                >
                  <Modal.Header closeButton>
                    <Modal.Title>Woohoo! Order Successful.</Modal.Title>
                  </Modal.Header>
                  <Modal.Body>
                    The Collective will prepare your order for delivery. 🚚🍴
                  </Modal.Body>
                  <Modal.Footer>
                    <Button
                      variant="success"
                      onClick={() => {
                        handleClose();
                      }}
                    >
                      Close
                    </Button>
                  </Modal.Footer>
                </Modal>
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
