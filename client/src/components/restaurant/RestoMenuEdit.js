import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { FirebaseContext, useFirebase } from "../FirebaseProvider";
import { Form, Container, Button } from "react-bootstrap";
import AddAppItem from "./AddAppItem";
import AddMainItem from "./AddMainItem";
import AddDessertItem from "./AddDessertItem";
import { useForm } from "react-hook-form";



const RestoMenuEdit = () => {
  const { id } = useParams();
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState(null);
  // const [name, setName] = useState("");
  // const [price, setPrice] = useState("");

  // const [tempName, setTempName] = useState("");
  // const [tempPrice, setTempPrice] = useState("");
  
  //Using useForm
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  useEffect(() => {
    const getMenuData = async () => {
      try {
        let docRef = doc(db, "restaurants", id);
        let docSnap = await getDoc(docRef);
        if (!docSnap.exists()) {
          console.log("No docs found");
        } else {
          let restoData = docSnap.data();
          restoData.DOC_ID = docSnap.id;
          setRestaurant(restoData);
        }
      } catch (ex) {
        console.log("Firestore failure!", ex.message);
      }
    };
    if (id) {
      getMenuData();
    }
  }, [id]);

  return (
    <div>
      <h3> Menu: </h3>
      <h3> Appetizers:</h3>
      {/* {restaurant &&
        restaurant.menu.appetizers.map((i, index) => (
          // <EditItemDisplay key={i.name} item={i}  />
          <ApptizerEdit key={i.name} item={i} /> //pass the path to updte + restoId, [`$index`]  //path: path=`menu.appetizers.` 
        ))} */}
      {/* <AddAppItem /> //TO ADD ITEM */}
      <h3> Mains:</h3>
      {/* {restaurant &&
        restaurant.menu.mains.map((i) => (
          <EditItemDisplay key={i.name} item={i} />
          ))}
      <AddMainItem /> */}
      <h3> Desserts:</h3>
      {/* {restaurant &&
        restaurant.menu.desserts.map((i) => (
          <EditItemDisplay key={i.name} item={i} />
          ))}
        <AddDessertItem /> */}
      <h3>docId: {restaurant?.DOC_ID}</h3>

      <hr />
    </div>
  );
};

export default RestoMenuEdit;

// const EditItemDisplay = (props) => {
//   const item = props.item;
//   return (
  //     <Container
  //       style={{
//         width: "400px",
//         backgroundColor: "#feaa00",
//       }}
//     >
//       <Form onSubmit={handleSubmit(onSubmit)}>
//         <Form.Group className="mb-3" controlId="formMenuItem">
//           <Form.Label>Name:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Name"
//             {...register("First name", { required: true, maxLength: 80 })}
//           />
//           <Form.Label>Price:</Form.Label>
//           <Form.Control
//             type="text"
//             placeholder="Price"
//             {...register("Price", { required: true })}
//           />
//           <br />
//           <input type="submit" />
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// };

// const ApptizerEdit = (props) => {
//   const { db } = FirebaseContext();
//   const { id } = useParams();
//   const item = props.item;
//   console.log("item", item);
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({ defaultValues: item });
//   const onSubmit = async (data2) => {
//     console.log("data..updateDoc or query_specifi field nameand price", data2);
//     //button - currentResto ID_ updateDoc (ApI)_ change the spicific field's value
//     //google..
//     //send the the whole restaurant doc (updated) back to the "restaurant" doc

//     let restoDocRef = doc(db, `restaurants/${id}`);
//     let data = await updateDoc(restoDocRef, "${menu.appetizers[0]}", {
//       name: "zzzz",
//       price: "$0.25",
//     });
//     console.log("received data", data);
//   };
// console.log("errors?", errors);
// const temp = { ...register("name", { required: true }) };
// console.log("temp is", temp);
// return (
//     <div>
//       <input type="text" placeholder="enter name" {...temp} />
//       <lable>Price: </lable>
//       <input
//         type="text"
//         placeholder={item.price}
//         {...register("price", { required: true })}
//       />
//       <button type="button" onClick={handleSubmit(onSubmit)}>
//         Update
//       </button>
//     </div>
//   );
// };