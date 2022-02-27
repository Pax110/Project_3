import { Card, Button, Container, Form, Row, Col } from "react-bootstrap";
import React from "react";

import { useState } from "react";

const styles = {
  myContainerPadding: {
    paddingBottom: "5vh",
    paddingRight: "5vw",
    paddingLeft: "5vw",
  },
};
const myStyle = { fontFamily: "Bebas Neue" };

const NeedHelp = () => {
  const [showHelp1, setShowHelp1] = useState();
  const [showHelp2, setShowHelp2] = useState();
  const [showHelp3, setShowHelp3] = useState();
  const [showHelp4, setShowHelp4] = useState();
  return (
    <Container>
      <h1 className="p-4 box text-center" style={myStyle}>
        FAQ's
      </h1>
      <Form fluid style={styles.myContainerPadding}>
        <Row>
          <Col>
            <Card
              className="mb-3"
              style={{
                backgroundColor: "#f7f4ef",
                color: "#000",
                height: "350px",
              }}
            >
              {!showHelp1 && (
                <>
                  <Card.Body>
                    <Card.Title>What is a Commissary Kitchen?</Card.Title>
                    <Card.Text>
                      A commissary kitchen is a licensed commercial kitchen
                      regulated by Alberta Health Services (AHS), where food
                      service providers can safely and legally prepare, cook,
                      and store food and equipment.
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp1(!showHelp1);
                      }}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </>
              )}
              {showHelp1 && (
                <>
                  <Card.Body>
                    <Card.Title>What is a Commissary Kitchen?</Card.Title>
                    <Card.Text>
                      A commissary kitchen is a licensed commercial kitchen
                      regulated by Alberta Health Services (AHS), where food
                      service providers can safely and legally prepare, cook,
                      and store food and equipment.
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp1(!showHelp1);
                      }}
                    >
                      Back
                    </Button>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>

          <Col>
            <Card
              className="mb-3"
              style={{
                backgroundColor: "#f7f4ef",
                color: "#000",
                height: "350px",
              }}
            >
              {!showHelp2 && (
                <>
                  <Card.Body>
                    <Card.Title>What is a Home Based Kitchen?</Card.Title>
                    <Card.Text>
                      Food prepared in an AHS-approved residental kitchen
                      delivered right to your door!
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp2(!showHelp2);
                      }}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </>
              )}
              {showHelp2 && (
                <>
                  <Card.Body>
                    <Card.Title>What is a Home Based Kitchen?</Card.Title>
                    <Card.Text>
                      What if your neighbour has cooked pasta for lunch while
                      her neighbour has rustled up a Nizami biriyani and you had
                      the option to order in both piping hot at your workplace
                      or home? <br /> Now with Culinary Collectiive, a brand new
                      mobile-based home food discovery and ordering platform
                      that enables home cooked meals to be delivered at the
                      doorstep, it is reality.
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp2(!showHelp2);
                      }}
                    >
                      Back
                    </Button>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>

          <Col>
            <Card
              className="mb-3"
              style={{
                backgroundColor: "#f7f4ef",
                color: "#000",
                height: "350px",
              }}
            >
              {!showHelp3 && (
                <>
                  <Card.Body>
                    <Card.Title>Why is Supporting Local Important?</Card.Title>
                    <Card.Text>
                      You support the local economy, you get unique goods and
                      services,it helps protect the environment,your money stays
                      in Calgary
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp3(!showHelp3);
                      }}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </>
              )}
              {showHelp3 && (
                <>
                  <Card.Body>
                    <Card.Title>Why is Supporting Local Important?</Card.Title>
                    <Card.Text>
                      Small businesses make up more than sixty per cent of the
                      retail sector in Calgary. Local businesses generate about
                      four times more economic activity than larger
                      corporations. And support for local businesses means
                      support for local jobs. Money stays local not only does a
                      dollar go further when spent at a local level, it also
                      keeps on giving. Over half of every $100 earned by local
                      businesses ends up recirculating in the Calgary economy.
                      It’s a win-win for our neighbourhood businesses when you
                      think local.You help out the environment Less time and
                      resources shipping products grown and made nearby means
                      fewer emissions are associated with every purchase. Local
                      foods, which support area farmers, can be even more
                      beneficial.
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp3(!showHelp3);
                      }}
                    >
                      Back
                    </Button>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>

          <Col>
            <Card
              className="mb-3"
              style={{
                backgroundColor: "#f7f4ef",
                color: "#000",
                height: "350px",
              }}
            >
              {!showHelp4 && (
                <>
                  <Card.Body>
                    <Card.Title>My Order Was Not Correct</Card.Title>
                    <Card.Text>
                      Fear not, we are here to correct any issues!
                      <br /> Wrong item delievered? Missing an item?
                      Overchanged? <br /> We got you covered!
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp4(!showHelp4);
                      }}
                    >
                      More Details
                    </Button>
                  </Card.Body>
                </>
              )}
              {showHelp4 && (
                <>
                  <Card.Body>
                    <Card.Title>My Order Was Not Correct</Card.Title>
                    <Card.Text>
                      E-mail our Customer Care Team at help@cc.com and we will
                      reach out to you with a solution.
                    </Card.Text>
                    <Button
                      onClick={() => {
                        setShowHelp4(!showHelp4);
                      }}
                    >
                      Back
                    </Button>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </Form>
    </Container>
  );
};

export default NeedHelp;
