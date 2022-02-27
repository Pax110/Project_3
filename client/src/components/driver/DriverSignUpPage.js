import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useFirebase } from "../FirebaseProvider";
import { useUserAuth } from "../context/UserAuthContext";
import EditDriverSignUpForm from "./EditDriverSignUpForm";

const DriverSignUpPage = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const { id } = useParams();
  console.log("user id is", user.uid);
  console.log("THIS USER ID IS FROM PARAMS", id);
  const [document, setDocument] = useState();

  // //getting DOC_ID to update the data

  useEffect(() => {
    let collRef = collection(db, "restaurants");
    let docRef = doc(collRef, id);
    const unsubscribe = onSnapshot(docRef, (doc) => {
      if (doc.exists()) {
        const receivedData = doc.data();
        console.log(
          "Selected Restaurant : RECEIVED DOCUMENT DATA",
          receivedData
        );
        setDocument(receivedData);
      }
    });
    return unsubscribe;
  }, []);

  console.log("document in the page", document);
  if (document) {
    return <EditDriverSignUpForm id={id} doc={document} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default DriverSignUpPage;
