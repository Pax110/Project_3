import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col } from "react-bootstrap";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [selectedResto, setSelectedResto] = useState("");
  const [restoData, setRestoData] = useState({});

  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "restaurants");
      let q = query(restoRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(q);
      let newData = querySnap.docs.map((doc) => doc.data());
      setRestoData(newData);
    };
    getData();
  }, [user.uid]);

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
          <option value="Choose...">Choose...</option>{" "}
          {restoData &&
            restoData.map((i) => <ItemDisplay key={i.name} item={i} />)}
        </Form.Select>
      </Form.Group>
    </div>
  );
};
export default RestoSelectMenu;
