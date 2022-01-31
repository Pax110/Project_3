import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap';
import React from 'react';


import { useState } from 'react';


const styles = {
    myContainerPadding: {
        paddingTop: "5vh",
        paddingBottom: "5vh",
        paddingRight: "5vw",
        paddingLeft: "13vw"
    }
}



const NeedHelp = () => {
    const [showHelp1, setShowHelp1]=useState()
    const [showHelp2, setShowHelp2]=useState()
    const [showHelp3, setShowHelp3]=useState()
    const [showHelp4, setShowHelp4]=useState()
  return (
    <div className="App">
        <Container fluid style={styles.myContainerPadding}>
          <Form>
            <Row>
              <Col>
                <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp1 &&
                    <>
                       
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp1(!showHelp1)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp1 &&
                     <>
                     
                     <Card.Body>
                         <Card.Title>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         </Card.Title>
                         <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp1(!showHelp1)}}>
                            Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>


              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp2 &&
                    <>
                        
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp2(!showHelp2)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp2 &&
                     <>
                     
                     <Card.Body>
                     <Card.Title>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         </Card.Title>
                         <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp2(!showHelp2)}}>
                             Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>



              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp3 &&
                    <>
                       
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp3(!showHelp3)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp3 &&
                     <>
                     
                     <Card.Body>
                     <Card.Title>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         </Card.Title>
                         <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp3(!showHelp3)}}>
                             Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>



              <Col>
              <Card className="mb-3" style={{color:"#000"}}>
                    {!showHelp4 &&
                    <>
                      
                        <Card.Body>
                            <Card.Title>
                                FAQ
                            </Card.Title>
                            <Card.Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit?
                            </Card.Text>
                            <Button onClick={()=>{setShowHelp4(!showHelp4)}}>
                                FAQ Answer
                            </Button>
                        </Card.Body>
                        </>
                    }
                    {showHelp4 &&
                     <>
                     
                     <Card.Body>
                     <Card.Title>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit
                         </Card.Title>
                         <Card.Text>
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                         </Card.Text>
                         <Button onClick={()=>{setShowHelp4(!showHelp4)}}>
                             Back
                         </Button>
                     </Card.Body>
                     </>}
                </Card> 
              </Col>



            </Row>
          </Form>
          </Container>    
         
    </div>
  );
}

export default NeedHelp;

     