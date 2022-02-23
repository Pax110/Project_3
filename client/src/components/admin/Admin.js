import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

import Table from "react-bootstrap/Table";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SingleUser from "./SingleUser";

const Admin = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();

  // const [selectedRestoID, setSelectedRestoID] = useState("");
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "users");
      // let q = query(restoRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(restoRef);
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
  console.log("userdata", userData);
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>List of all users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
          </tr>
        </thead>

        {userData &&
          userData.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  <SingleUser index={index} data={data} />
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
};
export default Admin;

// <tbody key={index}>
//   {" "}
//   <tr>
//     <td>{index}</td>
//     <td>{data.firstName}</td>
//     <td>{data.lastName}</td>
//     <Link to="/admin/user-profile">
//       {" "}
//       <td>{data.email}</td>{" "}
//     </Link>
//     <td>{data.phone}</td>
//   </tr>
// </tbody>
