import { doc, addDoc, collection, setDoc } from "firebase/firestore";
import {db} from "./FirebaseProvider";

export const createUserDocument = async (user) => {

  // get a reference to the Firestore document
  //   const docRef = db.doc(`/users/${user.uid}`);

  //  await addDoc(collection(db,"users"), {
  //   uid: user.uid,
  //   email: user.email,
  //   name: user.displayName,
  //   address: '',
  //   city: '',
  //   state: '',
  //   zip: '',
  //   phone: '',

  //   })

  // let db = getFirestore()
  let collRef = collection(db, "users");
  let docRef = doc(collRef, user.uid);
  await setDoc(docRef, {
    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address: "",
    city: "",
    state: "",
    zip: "",
    phone: "",
  });
};
