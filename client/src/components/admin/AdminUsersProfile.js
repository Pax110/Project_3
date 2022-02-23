import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Tab, Tabs } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const AdminUsersProfile = ({ data }) => {
  const { db, user } = useUserAuth();
  const [userProfile, setUserProfile] = useState([]);
  const { id } = useParams();

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
  console.log("userProfile", userProfile);
  return (
    <div>
      {userProfile.map((user) => {
        return (
          <div>
            <Tabs
              defaultActiveKey="profile"
              id="uncontrolled-tab-example"
              className="mb-3"
            >
              <Tab eventKey="profile" title="Profile">
               
               <div>First Name: {user.firstName}</div><br/>
               <div>Last Name: {user.lastName}</div><br/>
               <div>Email: {user.email}</div><br/>
               <div>Phone: {user.phone}</div><br/>
               <div>Address: {user.address} {user.city} {user.state} {user.zip}</div><br/>
               
              </Tab>
              <Tab eventKey="orders" title="Orders">
                List of all the orders associated with this restaurant
              </Tab>
              {user.role != "Customer" && <Tab eventKey="uploads" title="View Uploads">
                All the uploads the restaurnt has uploaded for us to approve or deny
              </Tab>}
             
            </Tabs>
          </div>
        );
      })}
    </div>
  );
};

export default AdminUsersProfile;
