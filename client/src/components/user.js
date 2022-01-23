import { getFirestore } from "firebase/firestore";
import { db, storage } from './firebase';

export const createUserDocument = async (user) =>{
    //get a reference to the firestore document
    const docRef = db.doc(`/users/${user.uid}`) 


//create user object
const userProfile = {

    uid: user.uid,
    email: user.email,
    name: user.displayName,
    address: '',
    city: '',
    state: '',
    zip: '',
    phone: '',


}

return docRef.set(userProfile)
}

