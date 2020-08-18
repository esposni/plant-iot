import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  // Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function IndexNavbar() {
  const [navbarColor, setNavbarColor] = React.useState("navbar-transparent");
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  
  React.useEffect(() => {
    const updateNavbarColor = () => {
      if(window.location.pathname==="/index"){
        setNavbarColor("");
      }else{
        if (
          document.documentElement.scrollTop > 399 ||
          document.body.scrollTop > 399
        ) {
          setNavbarColor("");
        } else if (
          document.documentElement.scrollTop < 400 ||
          document.body.scrollTop < 400
        ) {
          setNavbarColor("navbar-transparent");
        }
      }
     
     
    };
    window.addEventListener("scroll", updateNavbarColor);
    window.addEventListener("load", updateNavbarColor);
    
    return function cleanup() {
      window.removeEventListener("scroll", updateNavbarColor);
    };
  });
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      {/* change info color */}
      <Navbar className={"fixed-top " + navbarColor} expand="lg" color="info">
        <Container>
          <div className="navbar-translate">
            <NavbarBrand
              // target="_blank"
              id="navbar-brand"
              to="/" tag={Link}
            >
                 {/* {<img
              alt="..."
              className="logo"
              src={require("assets/img/logo1.png")} 
              
            /> */}
            <b>AttivaMente</b>
             
            </NavbarBrand>
            {/* <UncontrolledTooltip target="#navbar-brand">
              Designed by Invision. Coded by Creative Tim
            </UncontrolledTooltip> */}
            <button
              className="navbar-toggler navbar-toggler"
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              type="button"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <Collapse
            className="justify-content-end"
            isOpen={collapseOpen}
            navbar
          >
            <Nav navbar>
             <NavItem>
                <NavLink
                  href="#pablo"
                  to="/profile-page" tag={Link}
                >
                  <p>MI PRESENTO</p>
                </NavLink>
              </NavItem>
              
              
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  onClick={e => {
                    e.preventDefault();
                    document
                      .getElementById("download-section")
                      .scrollIntoView();
                  }}
                >
                  <i className="now-ui-icons arrows-1_cloud-download-93"></i>
                  <p>Chi sono</p>
                </NavLink>
              </NavItem> */}
              
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>ATTIVITÀ AREA CLINICA</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem to="/attivita-adulti" tag={Link}>
                   ADULTI
                  </DropdownItem>
                  <DropdownItem to="/attivita-infanzia" tag={Link}>
                  INFANZIA E ADOLESCENZA
                  </DropdownItem>
          
                 
                </DropdownMenu>
              </UncontrolledDropdown>

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>ATTIVITÀ AREA APPRENDIMENTO</p>
                </DropdownToggle>
                <DropdownMenu>
                  <DropdownItem to="/attivita-apprendimento" tag={Link} >
                   COS'È
                  </DropdownItem>
                <DropdownItem to="/attivita-scuola" tag={Link} >
                   ABILITÀ SCOLASTICHE
                  </DropdownItem>
                  <DropdownItem to="/attivita-dsa" tag={Link}>
                  DSA
                  </DropdownItem>
                  <DropdownItem to="/attivita-servizi" tag={Link}>
                  SERVIZI ALLE SCUOLE
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>


             

              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  href="#pablo"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <i className="now-ui-icons design_app mr-1"></i>
                  <p>ATTIVITA’ AREA ORIENTAMENTO</p>
                </DropdownToggle>
                <DropdownMenu>
                <DropdownItem to="/adulti" tag={Link} >
                ADOLESCENTI E ADULTI
                  </DropdownItem>
                  <DropdownItem to="/formazione" tag={Link}>
                  SERVIZI AGLI ENTI DI FORMAZIONE <br/> E DEI SERVIZI AL LAVORO 
                  </DropdownItem>
                 
                </DropdownMenu>
              </UncontrolledDropdown>
              {/* <NavItem>
                <NavLink
                  href="#pablo"
                  to="/profile-page" tag={Link}
                >
                  <p>SERVIZI ON-LINE </p>
                </NavLink>
              </NavItem> */}

{/* Social                 ---------------------------------------------- */}
              {/* <NavItem>
                <NavLink
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  id="twitter-tooltip"
                >
                  <i className="fab fa-twitter"></i>
                  <p className="d-lg-none d-xl-none">Twitter</p>
                </NavLink>
                <UncontrolledTooltip target="#twitter-tooltip">
                  Follow us on Twitter
                </UncontrolledTooltip>
              </NavItem> */}
              
              <NavItem>
                <NavLink
                  href="https://web.facebook.com/psicologaMariaEsposito/"
                  target="_blank"
                  id="facebook-tooltip2"
                >
                  <i className="fab fa-facebook-square"></i>
                  <p className="d-lg-none d-xl-none">Facebook</p>
                </NavLink>
                <UncontrolledTooltip target="#facebook-tooltip2">
                 Pagina facebook
                </UncontrolledTooltip>
              </NavItem>
              {/* <NavItem>
                <NavLink
                  href=""
                  target="_blank"
                  id="instagram-tooltip"
                >
                  <i className="fab fa-instagram"></i>
                  <p className="d-lg-none d-xl-none">Instagram</p>
                </NavLink>
                <UncontrolledTooltip target="#instagram-tooltip">
                  Follow me on Instagram
                </UncontrolledTooltip>
              </NavItem> */}
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default IndexNavbar;
