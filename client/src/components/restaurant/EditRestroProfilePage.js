import { useParams } from "react-router-dom";
import React, { useEffect } from "react";

import {
  collection,
  doc,
  onSnapshot,
  setDoc,
  query,
  where,
  getDoc,
  getDocs,
  updateDoc,
} from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import EditRestoProfileForm from "./EditRestoProfileForm";

//user.uid === restaurants.OwnerUid
//move jx into another file call it edit restro priofile form takes 1 property which is restro document , once it has the document it will render the edit restro form component and pass it the document
//use form hook will be moved into the use form down into the form component. use form will only run only once it has the document . the name field will then be populated
//edit profilepage : get the data and get the id, then load up in a diff comp.
//make sure to use the controller around each field
//34 to 56 delete after all the stuff is moved

const EditRestroProfilePage = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const { id } = useParams();
  console.log("user id is", user.uid);
  console.log("THIS USER ID IS FROM PARAMS", id);
  // const [document, setDocument] = useState([]);

  // //getting DOC_ID to update the data
  // const [id, setId] = useState("");

  useEffect(async () => {
    try {
      console.log("useEffect triggered");
      let collectionRef = collection(db, "restaurants");

      // let alldocs = await getDocs(collectionRef)

      let queryRef = query(collectionRef, where("ownerUid", "==", user.uid));
      let querySnap = await getDocs(queryRef);

      console.log("querySnap", querySnap);
      if (querySnap.empty) {
        console.log("querySnap came back empty");
      } else {
        let newData = querySnap.docs.map((doc) => ({
          ...doc.data(),
          DOC_ID: doc.id,
        }));
        console.log("new data", newData[0].name);
        // setDocument(newData[0]);
        console.log("setId is.........", newData[0].DOC_ID);
        // setId(newData[0].DOC_ID);
      }
    } catch (ex) {
      console.log("Errorrrr", ex.message);
    }
  }, []);

  return (
    <div>
      {" "}
      <EditRestoProfileForm props={document} />
    </div>
  );
};

export default EditRestroProfilePage;
