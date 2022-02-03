import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [selectedResto, setSelectedResto] = useState("");
  const [restoData, setRestoData] = useState([]);
  const [id, setID] = useState("");

  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "restaurants");
      let q = query(restoRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(q);
      let newData = querySnap.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));
      console.log("new data", newData);
      setRestoData(newData);
      setID(newData[0].DOC_ID);
    };
    if (user) {
      getData();
    }
  }, [user?.uid]);

  const ItemDisplay = (props) => {
    const item = props.item;
    return <option>{item.name}</option>;
  };

  return (
    <div>
      {console.log("Resto Data is:", restoData)}
      <Form.Group as={Col} controlId="formSelectResto">
        <Form.Label>Select Restaurant:</Form.Label>
        <Form.Select
          type="resto"
          value={selectedResto}
          onChange={(e) => setSelectedResto(e.target.value)}
        >
          <option value="Choose...">Choose...</option>
          {restoData &&
            restoData.map((i, index) => <ItemDisplay key={index} item={i} />)}
        </Form.Select>
      </Form.Group>
      <Link to={`/restaurants/editprofile/${id}`}>
        <Button
          variant="primary"
          disabled={!selectedResto}
          style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
        >
          Account Details
        </Button>
      </Link>
      <Link to={`/restaurants/editmenu/${id}`}>
        <Button
          variant="primary"
          disabled={!selectedResto}
          style={{ backgroundColor: "#feaa00", borderColor: "#feaa00" }}
        >
          Menu Details
        </Button>
      </Link>{" "}
    </div>
  );
};
export default RestoSelectMenu;
