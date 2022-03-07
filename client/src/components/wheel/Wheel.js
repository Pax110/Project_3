import React, { useState, useEffect } from "react";
import WheelComponent from "react-wheel-of-prizes";
import { useFirebase } from "../FirebaseProvider";
import { collection, doc, getDocs } from "firebase/firestore";
import LoadingScreen from "../navigation/LoadingScreen";
import { Button, Container } from "react-bootstrap";
import background from "../landingimage/wood.jpg";
import { Link } from "react-router-dom";

const Wheel = ({ restaurant }) => {
  const [segments, setSegments] = useState();
  const [restaurants, setRestaurants] = useState()
  const myStyle = { fontFamily: "Bebas Neue" };
  const [winnerRestoId, setWinnerRestoId] = useState()

  const { db } = useFirebase();
  useEffect(() => {
    const getRestaurants = async () => {
      const restaurantsCollectionRef = collection(db, "restaurants");
      const querySnap = await getDocs(restaurantsCollectionRef);
      let restos = querySnap.docs.map((docSnap) => ({...docSnap.data(), DOC_ID: docSnap.id}));
      setRestaurants(restos)
      console.log("restos is", restos)
     
      let restonames = querySnap.docs.map((docSnap) => docSnap.data().name);
      setSegments(restonames);
    };

    getRestaurants();
  }, [db]);

  console.log("segment is", restaurant);
  const segColors = [
    "#FEBF00",
    "#F27A00",
    "#80142D",
    "#768D00",
    "#B90300",
    "#F64900",
    "#CB8A2D",
    "#90B274",
    "#CFE773",
    "#E69843",
    "#F48E69",
    "#1E6604",
    "#E44C74",
  ];
  const onFinished = (winner) => {
    let filtered = restaurants.filter((restaurant)=>{
      
      console.log("restos ID...", restaurant)
      return restaurant.name === winner
    })
    console.log("filtered",filtered)
    setWinnerRestoId(filtered[0].DOC_ID)
    console.log(winner);

  };

  if (!segments) {
    return <LoadingScreen />;
  }

  console.log("segments is", segments)
  return (
    <div
      style={{
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        padding: "20px",
      }}
    >
      <Container
        style={{
          width: "800px",
          backgroundColor: "#f7f4ef",
          borderRadius: "15px",
        }}
      >
        <h1 className="p-4 box mt-3 text-center" style={myStyle}>
          SURPRISE ME
        </h1>
        <Container style={{ paddingLeft: "90px" }}>
          <WheelComponent
            segments={segments}
            segColors={segColors}
            winningSegment="won 10"
            onFinished={(winner) => onFinished(winner)}
            primaryColor="black"
            contrastColor="white"
            buttonText="Spin"
            isOnlyOnce={false}
            size={250}
            upDuration={100}
            downDuration={1000}
            fontFamily="Arial"
          ></WheelComponent>
          <div>
            <Link
              to={`/menu/${winnerRestoId}`}
            >
              { winnerRestoId && <Button>Veiw</Button>}
            </Link>
          </div>
        </Container>
      </Container>
    </div>
  );
};
export default Wheel;
