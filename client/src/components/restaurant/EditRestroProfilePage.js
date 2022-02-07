import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

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
   const [document, setDocument] = useState([]);

  // //getting DOC_ID to update the data




  useEffect(() => {
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, id);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const receivedData = doc.data();
        console.log("Selected Restaurant : RECEIVED DOCUMENT DATA", receivedData);
       setDocument(receivedData)
      }
    });
    return unsubscribe;
  }, []);


  return (
    <div>
      {" "}
      {console.log("document in the page",document)}
      <EditRestoProfileForm props={document} />
    </div>
  );
};

export default EditRestroProfilePage;
