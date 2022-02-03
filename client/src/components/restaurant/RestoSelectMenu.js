import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col } from "react-bootstrap";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [restoName, setRestoName] = useState([]);
  const [restoData2, setRestoData2] = useState({});

  useEffect(() => {
    const getData = async () => {
      let restoRef = collection(db, "restaurants");
      let q = query(restoRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(q);
      console.log(q);
      console.log("the restos we own are:");
      querySnap.forEach((doc) => {
        let restoData = doc.data();
        console.log(`name: ${restoData.name}`);
        setRestoData2(restoData);
      });
    };
    getData();
  }, []);

  return (
    <div>
      {console.log("Resto Data2:", restoData2)}

      <Form.Group as={Col} controlId="formGridProvince">
        <Form.Label>Select Restaurant:</Form.Label>
        <Form.Select
          // defaultValue="Choose..."
          type="province"
          value={restoData2.name}
          onChange={(e) => setRestoName(e.target.value)}
        >
          <option value="Choose...">Choose...</option>
          <option value={restoName}>{restoData2.name}</option>
          <option value={restoName}>{restoData2.name}</option>
          <option value={restoName}>{restoData2.name}</option>
        </Form.Select>
      </Form.Group>
    </div>
  );
};
export default RestoSelectMenu;
