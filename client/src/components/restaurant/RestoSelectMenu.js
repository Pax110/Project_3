import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ReceiptLong } from "@styled-icons/material-outlined/ReceiptLong";
import { PersonCircle } from "@styled-icons/bootstrap/PersonCircle";
import { MenuBook } from "@styled-icons/material-twotone/MenuBook";
import { RestaurantMenu } from "@styled-icons/material-sharp/RestaurantMenu";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [selectedRestoID, setSelectedRestoID] = useState("");
  const [restoData, setRestoData] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "restaurants");
      let q = query(restoRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(q);
      let newData = querySnap.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));
      setRestoData(newData);
    };
    if (user) {
      getData();
    }
  }, [user?.uid]);

  const ItemDisplay = (props) => {
    const item = props.item;
    return <option value={item.DOC_ID}>{item.name}</option>;
  };

  return (
    <div>
      <Form.Group as={Col} controlId="formSelectResto">
        <Form.Label style={{}}>Select Restaurant:</Form.Label>
        <Form.Select
          type="resto"
          value={selectedRestoID}
          onChange={(e) => {
            setSelectedRestoID(e.target.value);
          }}
        >
          <option value="Choose...">Choose...</option>
          {restoData &&
            restoData.map((i) => <ItemDisplay key={i.name} item={i} />)}
        </Form.Select>
        <Link to={`/restaurant/orders/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{
              backgroundColor: "#feaa00",
              borderColor: "#feaa00",
              padding: "0.25rem",
              margin: "1%",
            }}
          >
            <ReceiptLong style={{ width: "30px", height: "30px" }} />
            &nbsp;&nbsp;Orders
          </Button>
        </Link>
        <Link to={`/restaurant/editprofile/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{
              backgroundColor: "#feaa00",
              borderColor: "#feaa00",
              padding: "0.25rem",
              margin: "1%",
            }}
          >
            <RestaurantMenu style={{ width: "30px", height: "30px" }} />
            &nbsp;&nbsp;Account Details
          </Button>
        </Link>
        <Link to={`/restaurant/editmenu/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{
              backgroundColor: "#feaa00",
              borderColor: "#feaa00",
              padding: "0.25rem",
              margin: "1%",
            }}
          >
            <MenuBook style={{ width: "30px", height: "30px" }} />
            &nbsp;&nbsp;Menu Details
          </Button>
        </Link>{" "}
        <Link to={`/restaurant/chefprofile/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{
              backgroundColor: "#feaa00",
              borderColor: "#feaa00",
              padding: "0.25rem",
              margin: "1%",
            }}
          >
            <PersonCircle style={{ width: "30px", height: "30px" }} />
            &nbsp;&nbsp;Chef Profile
          </Button>
        </Link>
      </Form.Group>
    </div>
  );
};
export default RestoSelectMenu;
