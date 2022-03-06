import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import {
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import { FcSearch } from "react-icons/fc";
const ViewOrderstab = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [orders, setOrders] = useState();
  const [search, setSearch] = useState();
  const [sortedSearch, setSortedSearch] = useState("");

  useEffect(() => {
    console.log("useEf triggered..");

    const getData = async () => {
      const collRef = collection(db, "orders");
      const q = query(collRef);
      const querySnapshot = await getDocs(q);
      console.log("q", querySnapshot);
      let newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));
      console.log("new data", newData);
      setOrders(newData);
    };
    getData();
  }, [user.uid]);


  useEffect(()=>{
    const transformSearch = (o) => {
        let sorted = o;
        console.log("sorted is ", sorted);
        
        sorted = sorted.filter((order)=>{
            return order.orderId == search
        })
        console.log("sorted2 is ", sorted);
       return sorted
      };
      if (orders) {
        const result = transformSearch(orders);
        setSortedSearch(result)
      }
  },[search])

  if (orders) {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <FcSearch style={{ margin: "10px" }} />
              <FormControl
                type="search"
                placeholder="Search..."
                className="m-auto"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(search);
                }}
              />{" "}
            </Col>

            <Col>
              <div style={{ border: "10px" }}>
                <DropdownButton id="dropdown-basic-button" title="Sort by">
                  <Dropdown.Item href="#/action-1">Status</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Time</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
          </Row>
        </Container>
        <Table bordered>
          <thead style={{ textAlign: "center" }}>
            <tr style={{ backgroundColor: "white" }}>
              <th>#</th>
              <th>Order No.</th>
              <th>Order Date</th>
              <th>Order Time</th>
              <th>Order Amount</th>
              <th>Order Status</th>
            </tr>
          </thead>
          {sortedSearch ? 
          sortedSearch.map((order, index) => {
            return (
              <>
                <tbody key={index} style={{ textAlign: "center" }}>
                  <td>{index}</td>
                  <td>{order.orderId}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.orderTime}</td>
                  <td>$ {order.orderTotal}</td>

                  {order.orderStatus === "Complete" ? (
                    <td style={{ color: "green" }}>{order.orderStatus}</td>
                  ) : (
                    <td style={{ color: "red" }}>{order.orderStatus}</td>
                  )}
                </tbody>
              </>
            );
          })
          :
           orders.map((order, index) => {
            return (
              <>
                <tbody key={index} style={{ textAlign: "center" }}>
                  <td>{index}</td>
                  <td>{order.orderId}</td>
                  <td>{order.orderDate}</td>
                  <td>{order.orderTime}</td>
                  <td>$ {order.orderTotal}</td>

                  {order.orderStatus === "Complete" ? (
                    <td style={{ color: "green" }}>{order.orderStatus}</td>
                  ) : (
                    <td style={{ color: "red" }}>{order.orderStatus}</td>
                  )}
                </tbody>
              </>
            );
          })}
        </Table>
      </>
    );
  } else {
    return <div>Loading...</div>;
  }
};

export default ViewOrderstab;
