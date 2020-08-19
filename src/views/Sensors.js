import React, { 
    // useState, 
    // useEffect 
} from "react";
// import { Link } from "react-router-dom";
// reactstrap components
import {  Container, Row,Col } from "reactstrap";

// core components

export default function Sensors(props) {
  return (
    <>
      <div className="section section-examples" data-background-color="black">
        <div className="space-50"></div>
        <Container className="text-center">
         <h3 className="title">Sensors Status</h3>
          <Row>
            <Col className="ml-auto mr-auto text-center sensors-box" md="3">
                <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  style={{width:"6em",height:"6em", marginTop:"30px"}}
                  src={require("assets/img/hot.png")}
                ></img>
               {/* <h2 style={{color:"black",marginTop:"20px"}}>{props.val[0]} C°</h2> */}
               <h2 style={{color:"black",marginTop:"20px"}}>28 C°</h2>
            </Col>
            <Col className="ml-auto mr-auto text-center sensors-box" md="3">
            <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  style={{width:"6em",height:"6em", marginTop:"30px"}}
                  src={require("assets/img/humidity.png")}
                ></img>
                <h2 style={{color:"black",marginTop:"20px"}}>{parseInt(((1023-500)/1023)*100)+"%"}</h2>
            </Col>
            <Col className="ml-auto mr-auto text-center sensors-box" md="3">
            <img
                  alt="..."
                  className="rounded-circle img-fluid img-raised"
                  style={{width:"6em",height:"6em", marginTop:"30px"}}
                  src={require("assets/img/idea.png")}
                ></img>
                <h2 style={{color:"black",marginTop:"20px"}}>300 watts</h2>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

