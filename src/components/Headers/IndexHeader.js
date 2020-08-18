/*eslint-disable*/
import React, { 
  // useState, 
  // useEffect 
} from "react";

// reactstrap components
import { Container } from "reactstrap";

import ChatComponent from "../ChatComponent.js"
// core components

export default  function IndexHeader(props) {
  let pageHeader = React.createRef();

  // React.useEffect(() => {
  //   if (window.innerWidth > 991) {
  //     const updateScroll = () => {
  //       let windowScrollTop = window.pageYOffset / 3;
  //       pageHeader.current.style.transform =
  //         "translate3d(0," + windowScrollTop + "px,0)";
  //     };
  //     window.addEventListener("scroll", updateScroll);
  //     return function cleanup() {
  //       window.removeEventListener("scroll", updateScroll);
  //     };
  //   }
  // });

  return (
    <>
      <div className="page-header clear-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/bg7.jpg") + ")"
          }}
          ref={pageHeader}
        ></div>
        <Container>
          <div className="content-center brand">
            <ChatComponent modVal={props.modVal}/>
            <img
              alt="..."
              className=""
              style={{width:"6em",height:"6em", marginTop:"40px"}}
              src={require("assets/img/download.png")}
            />
           
          </div>
          
        </Container>
      </div>
    </>
  );
}

