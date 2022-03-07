import { collection, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useUserAuth } from "../context/UserAuthContext";
import { useFirebase } from "../FirebaseProvider";
import { Form, Col, Button, ButtonGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaFileDownload } from "react-icons/fa";
import { FaGrinAlt } from "react-icons/fa";
import { FaUtensils } from "react-icons/fa";
import { FaBookOpen } from "react-icons/fa";
import RestoOrdersViewPendingContext, { usePendings } from "./RestoOrdersViewPendingContext";

const RestoSelectMenu = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const [selectedRestoID, setSelectedRestoID] = useState("");
  const [restoData, setRestoData] = useState([]);
  const {value} = usePendings()
  console.log("value is...................",value)

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

  console.log("restoData is", restoData);
  // const handleSelection = (e) => {
  //   setSelectedRestoID(e.target.value);
  //   console.log("This selected", selectedRestoID);
  // };
  return (
    
      <div>
        <Form.Group as={Col} controlId="formSelectResto">
          <Form.Label style={{}}>Select Restaurant:</Form.Label>
          <div style={{ margin: "10px" }}>
            {restoData &&
              restoData.map((item) => (
                <Form.Check
                  inline
                  id={item.DOC_ID}
                  name="resto"
                  type="radio"
                  label={item.name}
                  value={selectedRestoID}
                  onChange={() => {
                    setSelectedRestoID(item.DOC_ID);
                  }}
                />
              ))}
          </div>
          <br></br>
          {selectedRestoID && (
            <Link to={`/restaurant/orders/${selectedRestoID}`}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#feaa00",
                  borderColor: "#feaa00",
                  padding: "0.25rem",
                  margin: "1%",
                }}
              >
                <FaFileDownload style={{ width: "30px", height: "30px" }} />
                {/* <ReceiptLong style={{ width: "30px", height: "30px" }} /> */}
                &nbsp;&nbsp;Orders
              </Button>
            </Link>
          )}
          {selectedRestoID && (
            <Link to={`/restaurant/editprofile/${selectedRestoID}`}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#feaa00",
                  borderColor: "#feaa00",
                  padding: "0.25rem",
                  margin: "1%",
                }}
              >
                <FaUtensils style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;Account Details
              </Button>
            </Link>
          )}
          {selectedRestoID && (
            <Link to={`/restaurant/editmenu/${selectedRestoID}`}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#feaa00",
                  borderColor: "#feaa00",
                  padding: "0.25rem",
                  margin: "1%",
                }}
              >
                <FaBookOpen style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;Menu Details
              </Button>
            </Link>
          )}{" "}
          {selectedRestoID && (
            <Link to={`/restaurant/chefprofile/${selectedRestoID}`}>
              <Button
                variant="primary"
                style={{
                  backgroundColor: "#feaa00",
                  borderColor: "#feaa00",
                  padding: "0.25rem",
                  margin: "1%",
                }}
              >
                <FaGrinAlt style={{ width: "30px", height: "30px" }} />
                &nbsp;&nbsp;Chef Profile
              </Button>
            </Link>
          )}
        </Form.Group>
      </div>
    
  );
};
export default RestoSelectMenu;

// const ItemDisplay = (props) => {
//   const item = props.item;
//   return <option value={item.DOC_ID}>{item.name}</option>;
// };
{
  /* <Form.Select
          type="resto"
          value={selectedRestoID}
          onChange={(e) => {
            setSelectedRestoID(e.target.value);
          }}
        >
          <option value="Choose...">Choose...</option>
          {restoData &&
            restoData.map((i) => <ItemDisplay key={i.name} item={i} />)}
        </Form.Select> */
}
