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
  const [total, setTotal] = useState();

  const { db,user } = useUserAuth();

  useEffect(() => {
    setTotal(
      cart.reduce((acc, curr) => acc + Number(curr.price) * curr.qty, 0)
    );
    console.log("cart value", cart);
  }, [cart]);

  const handleOrder = async () => {
    alert("Payment Successful. Thank you!");
    try {
      let collRef = collection(db, "orders");
     
      await addDoc(collRef, {
        customerId: user.uid,
        DeliveryType: "ASAP",
        orderTime: "9 AM",
        orderTotal: "$90",
        restaurantId: "xyz123.."

      });
    } catch (e) {
      console.log("error", e.message);
    }
  };

  return (
    <>
      <div className="home">
        <div className="productContainer">
          <ListGroup>
            {cart.map((item) => (
              <ListGroup.Item key={item.name}>
                <Row>
                  <Col md={2}>
                    <Image src={item.menuphoto} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={2}>
                    <span>{item.name}</span>
                  </Col>
                  <Col md={2}>$ {item.price}</Col>
                  <Col md={2}>{/* <Rating rating={prod.ratings} /> */}</Col>
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
          <span className="title">Subtotal ({cart.length}) items</span>
          <span style={{ fontWeight: 700, fontSize: 20 }}>
            Total: $ {total}
          </span>
          <Button
            type="button"
            disabled={cart.length === 0}
            onClick={handleOrder}
          >
            Proceed to Checkout
          </Button>
        </div>
      </div>
    </>
  );
};

export default Cart;
