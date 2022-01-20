import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  // apiKey: <YOURAPIKEY>,
  // authDomain: <YOURAUTHDOAMIN>,
  // projectId: <YOURPROJECTID>,
  // storageBucket: <YOURSTORAGEBUCKET>,
  // messagingSenderId: <YOURMESSAGINGSENDERID>,
  // appId: <YOURAPPID>,
  apiKey: "AIzaSyDa0LD1FY_-s8G9Sq__4jyQaHnCtwVs4O4",
    authDomain: "project-c1c8c.firebaseapp.com",
    projectId: "project-c1c8c",
    storageBucket: "project-c1c8c.appspot.com",
    messagingSenderId: "828436672252",
    appId: "1:828436672252:web:42afbb782a929e5f497179",
    measurementId: "G-D18T0N5LVG"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
