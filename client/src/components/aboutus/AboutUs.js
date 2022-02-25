import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const AboutUs = () => {
  const myStyle = {
    fontFamily: "Bebas Neue",
  };
  return (
    <Container
      style={{
        width: "100%",
        backgroundColor: "#f7f4ef",
        borderRadius: "15px",
        // paddingRight: "40px",
        // paddingLeft: "40px",
      }}
    >
      <h1 className="p-4 box mt-3 text-center" style={myStyle}>
        About Us
      </h1>
      <div>
        <h6>
          We are a collective of people, we collectively collect monies for
          foods, prepared by our community of culinary creators. We believe in
          the collective, the collective is us, the collective is you, the
          collective is many, collective is few, the collective is me and you.
          WE ARE THE COLLECTIVE.
        </h6>{" "}
        <p>
          <br /> Halloumi pepper jack blue castello. Port-salut queso cut the
          cheese fromage fromage melted cheese croque monsieur dolcelatte. Goat
          pepper jack stilton fromage fondue cheesy grin emmental melted cheese.
        </p>{" "}
        <p>
          Cheese strings airedale hard cheese macaroni cheese halloumi cheese on
          toast. Squirty cheese airedale port-salut. Stilton roquefort stinking
          bishop everyone loves mascarpone emmental swiss cream cheese. Parmesan
          halloumi monterey jack lancashire blue castello goat airedale fromage
          frais. Cheesy feet!{" "}
        </p>{" "}
        <br />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Link
          to="/need-help"
          style={{ color: "white", textDecoration: "none" }}
        >
          <button
            style={{
              backgroundColor: "orange",
              textDecoration: "none",
              padding: "0.5%",
              textAlign: "center",
              margin: "10px",
              marginBottom: "50px",
              justifyContent: "center",
              borderRadius: "5px",
            }}
          >
            Click Here for more FAQs
          </button>
        </Link>
      </div>
    </Container>
  );
};

export default AboutUs;
