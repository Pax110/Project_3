import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

import Table from "react-bootstrap/Table";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";

const Admin = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  // const [selectedRestoID, setSelectedRestoID] = useState("");
  const [userData, setUserData] = useState([]);
  const [role, setRole]= useState("")

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


  // const ItemDisplay = (props) => {
  //   const item = props.item;
  //   return <option value={item.DOC_ID}>{item.name}</option>;
  // };
  console.log("role is", role)
  return (
    <div>
      <h2>Admin Dashboard</h2>
      <h3>List of All users</h3>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Role</th>
            <th>Approve New Business:</th>
          </tr>
        </thead>

        {userData &&
          userData.map((data, index) => {
            return (
              <tbody key={index}>
                <tr>
                  {console.log("data back", data)}
                  <td>{index}</td>
                  <td>{data.firstName}</td>
                  <td>{data.lastName}</td>
                  <td>{data.email}</td>
                  <td>{data.phone}</td>
                  <td>{data.role}</td>
                  {data.role && <input type="checkbox" value={role} onChange={(e)=>{setRole(e.target.value)}}></input>}
                </tr>
              </tbody>
            );
          })}
      </Table>
    </div>
  );
};
export default Admin;
