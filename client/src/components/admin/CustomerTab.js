import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import SingleUser from "./SingleUser";

const CustomerTab = () => {
    const { db } = useFirebase();
    const { user } = useUserAuth();
    const [userData, setUserData] = useState([]);
  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "users");
      let q = query(restoRef, where('role', 'array-contains-any', ['Customer']));
      let querySnap = await getDocs(q);
      let newData = querySnap.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));

      setUserData(newData);
    };

    if (user) {
      getData();
     
    }
  }, []);
  console.log("Customer",userData)
  return <Table bordered>
  <thead>
    <tr style={{ backgroundColor: "white" }}>
      <th>#</th>
      <th style={{ width: "10px" }}>Edit User</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Email</th>
      <th>Phone</th>
     
    </tr>
  </thead>

  {userData &&
    userData.map((data, index) => {
      return (
        <tbody key={index}>
          <tr style={{ backgroundColor: "white" }}>
            <SingleUser index={index} data={data} />
          </tr>
        </tbody>
      );
    })}
</Table>;
};

export default CustomerTab;
