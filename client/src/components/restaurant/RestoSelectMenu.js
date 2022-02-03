import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

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
      {console.log("Resto Data is:", restoData)}
      <Form.Group as={Col} controlId="formSelectResto">
        <Form.Label>Select Restaurant:</Form.Label>
        <Form.Select
          type="resto"
          value={selectedRestoID}
          onChange={(e) => {
            console.log("selected value is:", e.target.value);
            setSelectedRestoID(e.target.value);
          }}
        >
          <option value="Choose...">Choose...</option>
          {restoData &&
            restoData.map((i) => <ItemDisplay key={i.name} item={i} />)}
        </Form.Select>
        <Link to={`/restaurants/editprofile/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
          >
            Account Details
          </Button>
        </Link>
        <Link to={`/restaurants/editmenu/${selectedRestoID}`}>
          <Button
            variant="primary"
            disabled={!selectedRestoID}
            style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
          >
            Menu Details
          </Button>
        </Link>{" "}
      </Form.Group>
    </div>
  );
};
export default RestoSelectMenu;