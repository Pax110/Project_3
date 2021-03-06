import React, { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";

import Table from "react-bootstrap/Table";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import SingleUser from "./SingleUser";
import { Container, Tab, Tabs } from "react-bootstrap";
import CustomerTab from "./CustomerTab";
import BusinessTab from "./BusinessTab";
import DriverTab from "./DriverTab";
import OthersTab from "./OthersTab";
import ViewOrderstab from "./ViewOrderstab";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import AnalyticsTab from "./AnalyticsTab";

const Admin = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();

  // const [selectedRestoID, setSelectedRestoID] = useState("");
  const [userData, setUserData] = useState([]);
  const [customer, setCustomer] = useState([]);
  const [business, setBusiness] = useState([]);
  const [driver, setDriver] = useState([]);
  const [others, setOthers] = useState([]);

  const myStyle = { fontFamily: "Bebas Neue" };

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
    const filterCustomers = () => {
      userData?.filter((user) => {
        user.role.includes("Customer") == true && setCustomer(user);
      });
  
    };
    const filterBusiness = () => {};
    const filterDrivers = () => {};
    const filterOthers = () => {};
    if (user) {
      getData();
      filterCustomers();
    }
  }, []);

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
      <h1 className="p-4 box text-center" style={myStyle}>
        Admin Dashboard
      </h1>
      <Tabs
        defaultActiveKey="Customers"
        id="uncontrolled-tab-example"
        className="mb-3"
      >
        <Tab eventKey="Customers" title="Customers">
          <CustomerTab />
        </Tab>
        <Tab eventKey="Business" title="Business">
          <BusinessTab />
        </Tab>
        <Tab eventKey="Driver" title="Driver">
          <DriverTab />
        </Tab>
        <Tab eventKey="Others" title="Others">
          <OthersTab />
        </Tab>
        <Tab eventKey="ViewOrders" title="View Orders">
          <ViewOrderstab />
        </Tab>
        <Tab eventKey="Analytics" title="Analytics">
          <AnalyticsTab />
        </Tab>
      </Tabs>
    </Container>
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

// <Table bordered>
//         <thead>
//           <tr style={{ backgroundColor: "white" }}>
//             <th>#</th>
//             <th style={{ width: "10px" }}>Edit User</th>
//             <th>First Name</th>
//             <th>Last Name</th>
//             <th>Email</th>
//             <th>Phone</th>
//             <th>Role</th>
//           </tr>
//         </thead>

//         {userData &&
//           userData.map((data, index) => {
//             return (
//               <tbody key={index}>
//                 <tr style={{ backgroundColor: "white" }}>
//                   <SingleUser index={index} data={data} />
//                 </tr>
//               </tbody>
//             );
//           })}
//       </Table>
