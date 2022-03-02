import { Card, Container } from "@mui/material";
import Image from "react-bootstrap/Image";
import background from "../landingimage/spotlight.jpg";
import { collection, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useFirebase } from "../FirebaseProvider";

const ChefSpotlight = () => {
  const { db } = useFirebase();
  const [restaurant, setRestaurant] = useState([]);
  const restaurantsCollectionRef = collection(db, "restaurants");

  const [chef, setChef] = useState(null);

  const myStyle = { fontFamily: "Bebas Neue" };
  const otherStyle = {
    fontFamily: "Roboto",
  };

  useEffect(() => {
    const getRestaurants = async () => {
      const querySnapshot = await getDocs(restaurantsCollectionRef);
      let newData = querySnapshot.docs.map((doc) => ({
        ...doc.data(),
        DOC_ID: doc.id,
      }));
      setRestaurant(newData);
    };
    getRestaurants();
  }, []);

  let length = restaurant.length;
  let random = Math.floor(Math.random() * length);

  useEffect(() => {
    setChef(random);
  }, [random]);

  if (restaurant) {
    return (
      <Container
        style={{
          backgroundImage: `url(${background})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          borderRadius: "15px",
          padding: "20px",
        }}
      >
        <h1 className="p-3 box mt-3 text-center" style={myStyle}>
          <br />
          Chef Spotlight
        </h1>

        {chef != null && (
          <div className="text-center">
            <h1 style={otherStyle}>
              Chef {restaurant[chef]?.contact.owner.firstName}
            </h1>
            <Image
              src={`${restaurant[chef]?.contact.owner.chefPhotoURL}`}
              style={{
                width: "250px",
                height: "250px",
                borderRadius: "50%",
                padding: "2%",
              }}
            />
            <h1 className="p-4" style={myStyle}>
              {restaurant[chef]?.name}
            </h1>
          </div>
        )}
      </Container>
    );
  }
};

export default ChefSpotlight;
