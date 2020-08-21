import React, { useState, 
  // useEffect 
} from "react";

// reactstrap components
// import {
// } from "reactstrap";

// core components
// import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import DarkFooter from "components/Footers/DarkFooter.js";
// sections for this page
import Sensors from "./Sensors.js";

function Index() {

  const [values,setValues] = useState({});
  React.useEffect(() => {
    document.body.classList.add("index-page");
   
    
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;
    return function cleanup() {
      document.body.classList.remove("index-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });
  return (
    <>
      {/* <IndexNavbar /> */}
      <div className="wrapper">
        <IndexHeader modVal={setValues} />
        <div className="main">
          <Sensors val={values}/>
        </div>
        <DarkFooter />
      </div>
    </>
  );
}

export default Index;
