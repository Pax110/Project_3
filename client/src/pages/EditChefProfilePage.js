import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { collection, doc, onSnapshot } from "firebase/firestore";
import { useFirebase } from "../components/FirebaseProvider";
import { useUserAuth } from "../components/context/UserAuthContext";
import EditChefProfileForm from "../components/restaurant/EditChefProfileForm";

const EditChefProfilePage = () => {
  const { db } = useFirebase();
  const { user } = useUserAuth();
  const { id } = useParams();
  console.log("user id is", user.uid);
  console.log("THIS USER ID IS FROM PARAMS", id);
  const [document, setDocument] = useState();

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
    return <EditChefProfileForm id={id} doc={document} />;
  } else {
    return <div>Loading...</div>;
  }
};

export default EditChefProfilePage;
