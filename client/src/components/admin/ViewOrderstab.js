import { collection, getDocs, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  FormControl,
  Row,
  Table,
} from "react-bootstrap";
import jsPDF from "jspdf";
import "jspdf-autotable";
import image from "../landingimage/cc.png";
import {FaArrowAltCircleDown} from 'react-icons/fa'

const ViewOrderstab = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [orders, setOrders] = useState();
  const [search, setSearch] = useState("");
  const [sortedSearch, setSortedSearch] = useState("");
  const [totalAmount, setTotalAmount] = useState();
  let allOrderData = [];
  let dailyOrdersData = [];
  let dateToday = new Date().toDateString();
  console.log("dateToday", dateToday);
  const head = [
    [
      "Order No.",
      "Order Date",
      "Order Time",
      "Order Amount",
      "Restaurant Name",
      "Order Status",
    ],
  ];

  useEffect(() => {
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

  useEffect(() => {
    const transformSearch = (o) => {
      let sorted = o;
      if (search != "") {
        sorted = sorted.filter((order) => {
          return search == order.orderId;
        });
      } else {
        return sorted;
      }
      return sorted;
    };
    if (orders) {
      const result = transformSearch(orders);
      setSortedSearch(result);
    }
  }, [search]);
  const handlePdf = () => {
    if (orders) {
      allOrderData = orders.map((order) => {
        let temp = [];
        temp.push(order.orderId);
        temp.push(order.orderDate);
        temp.push(order.orderTime);
        temp.push(order.orderTotal);
        temp.push(order.restaurantName);
        temp.push(order.orderStatus);

        return temp;
      });
      console.log("arraydata is", allOrderData);
    }
    const head = [
      [
        "Order No.",
        "Order Date",
        "Order Time",
        "Order Amount",
        "Restaurant Name",
        "Order Status",
      ],
    ];
    const body = allOrderData;
    let doc = new jsPDF();
    doc.text("CULINARY COLLECTIVE", 14, 12);
    
    doc.autoTable({ head: head, body: body });
    doc.save("Report.pdf");
  };

  const handleDailySales = () => {
    if (orders) {
      dailyOrdersData = orders.filter((order) => {
        return order.orderDate == dateToday;
      });
    }
    let dailyOrders = dailyOrdersData.map((order) => {
      let temp = [];
      temp.push(order.orderId);
      temp.push(order.orderDate);
      temp.push(order.orderTime);
      temp.push(order.orderTotal);
      temp.push(order.restaurantName);
      temp.push(order.orderStatus);

      return temp;
    });
    let dailyOrdersNumber = dailyOrdersData.length
    console.log("dailySalesData", dailyOrdersData)
    const total = dailyOrdersData.reduce(( currentTotal, order)=>{
          return +order.orderTotal + currentTotal
    },0)
    console.log("total", total)
    setTotalAmount(total)

    const body2 = dailyOrders;
    let doc = new jsPDF();
    doc.text(dateToday+"  "+ " | Total Sale $ " + total + "             | Orders: "+ dailyOrdersNumber, 14, 12);
 
    doc.autoTable({ head: head, body: body2 });
    doc.save("Daily Report.pdf");
  };

  if (orders) {
    return (
      <>
        <Container>
          <Row>
            <Col>
              <FormControl
                type="search"
                placeholder="Search..."
                className="sm-auto"
                aria-label="Search"
                value={search}
                onChange={(e) => {
                  setSearch(e.target.value);
                  console.log(search);
                }}
              />
            </Col>

            <Col>
              <div style={{ justifyContent: "end" }}>
                <DropdownButton id="dropdown-basic-button" title="Sort by">
                  <Dropdown.Item href="#/action-1">Status</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">Date</Dropdown.Item>
                  <Dropdown.Item href="#/action-3">Time</Dropdown.Item>
                </DropdownButton>
              </div>
            </Col>
            <Col>
              <Button onClick={handlePdf}> <FaArrowAltCircleDown style={{margin: "3px"}}/> Generate report </Button>
            </Col>
            <Col>
            
              <Button onClick={handleDailySales}>  <FaArrowAltCircleDown style={{margin: "3px"}}/> Daily sales report </Button>
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
              <th>Restaurant Name</th>
              <th>Order Status</th>
            </tr>
          </thead>
          {sortedSearch
            ? sortedSearch.map((order, index) => {
                return (
                  <>
                    <tbody key={index + 1} style={{ textAlign: "center" }}>
                      <td>{index + 1}</td>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.orderTime}</td>
                      <td>$ {order.orderTotal}</td>
                      <td> {order.restaurantName}</td>

                      {order.orderStatus === "Delivered" ? (
                        <td style={{ color: "green", fontWeight: "bold" }}>
                          {order.orderStatus}
                        </td>
                      ) : order.orderStatus === "Pending" ? (
                        <td style={{ color: "red" }}>{order.orderStatus}</td>
                      ) : (
                        <td style={{ color: "black" }}>{order.orderStatus}</td>
                      )}
                    </tbody>
                  </>
                );
              })
            : orders.map((order, index) => {
                return (
                  <>
                    <tbody key={index} style={{ textAlign: "center" }}>
                      <td>{index}</td>
                      <td>{order.orderId}</td>
                      <td>{order.orderDate}</td>
                      <td>{order.orderTime}</td>
                      <td>$ {order.orderTotal}</td>
                      <td> {order.restaurantName}</td>

                      {order.orderStatus === "Delivered" ? (
                        <td style={{ color: "green", fontWeight: "bold" }}>
                          {order.orderStatus}
                        </td>
                      ) : order.orderStatus === "Pending" ? (
                        <td style={{ color: "red" }}>{order.orderStatus}</td>
                      ) : (
                        <td style={{ color: "black" }}>{order.orderStatus}</td>
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
