import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Card, Container, Tab, Tabs } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";
import BackButton from "../navigation/BackButton";

const AdminUsersProfile = ({ data }) => {
  const { db, user } = useUserAuth();
  const [userProfile, setUserProfile] = useState([]);
  const { id } = useParams();
  //Getting user profile data
  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "users");

        const q = query(collRef, where("uid", "==", id));
        const querySnapshot = await getDocs(q);
        console.log("querySnapShot", querySnapshot);
        let newData = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        setUserProfile(newData);
        console.log("Order history: ", newData);
      } catch (e) {
        console.log("error", e.message);
      }
    };

    getData();
  }, [user.uid]);

  //Getting user orders data
  const [orders, setOrders] = useState();

  const myStyle = { fontFamily: "Bebas Neue" };

  useEffect(() => {
    const getData = async () => {
      try {
        let collRef = collection(db, "orders");

        const q = query(collRef, where("customerId", "==", id));
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
  console.log("userProfile", userProfile);
  return (
    <Container
      style={{
        width: "auto",
        maxWidth: "none",
        backgroundColor: "#f7f4ef",
        marginTop: "-5px",
        borderRadius: "15px",
        paddingBottom: "15px",
        overflowY: "auto",
        height: "80vh",
      }}
    >
      <Link to="/admin">
        <BackButton />
      </Link>
      <h1 className="p-4 box mt-3 text-center" style={myStyle}>
        User Profile
      </h1>
      <Container
        style={{
          width: "auto",
          backgroundColor: "white",
          maxWidth: "80%",
          borderRadius: "15px",
          paddingBottom: "15px",
        }}
      >
        {userProfile.map((user) => {
          return (
            <div>
              <Tabs
                defaultActiveKey="profile"
                id="uncontrolled-tab-example"
                className="mb-3"
              >
                <Tab eventKey="profile" title="Profile" color="black">
                  <div>First Name: {user.firstName}</div>
                  <br />
                  <div>Last Name: {user.lastName}</div>
                  <br />
                  <div>Email: {user.email}</div>
                  <br />
                  <div>Phone: {user.phone}</div>
                  <br />
                  <div>
                    Address: {user.address} {user.city} {user.state} {user.zip}
                  </div>
                  <br />
                </Tab>
                <Tab eventKey="orders" title="Orders">
                  {orders?.map((order) => (
                    <Card style={{ marginBottom: "10px" }}>
                      <Card.Header>
                        <strong>{order.restaurantName}</strong>
                      </Card.Header>
                      <Card.Body>
                        <Card.Title>Order Number: {order.orderId}</Card.Title>
                        <Card.Text>
                          Date: {order.orderDate} {order.orderTime}
                        </Card.Text>
                        <Card.Text>
                          {order.orderItems.map((item) => (
                            <>
                              <span>{item.qty}</span>
                              <span>&nbsp;x&nbsp;</span>
                              <span>{item.name}</span>
                              <span> </span>
                              <br />
                              <span>${item.price}</span>
                              <br></br>
                            </>
                          ))}
                          <hr></hr>
                          <p>Order Total: ${order.orderTotal}</p>
                        </Card.Text>
                      </Card.Body>
                    </Card>
                  ))}
                </Tab>
                {user.role != "Customer" && (
                  <Tab eventKey="uploads" title="View Uploads">
                    All the uploads the restaurnt has uploaded for us to approve
                    or deny
                  </Tab>
                )}
              </Tabs>
            </div>
          );
        })}
      </Container>
    </Container>
  );
};

export default AdminUsersProfile;
