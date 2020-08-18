/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function DarkFooter() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        {/* <nav>
          <ul>
            <li>
              <a
                href=""
                target="_blank"
              >
                Creative Tim
              </a>
            </li>
            <li>
              <a
                href=""
                target="_blank"
              >
                About Us
              </a>
            </li>

          </ul>
        </nav> */}
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()} {"  "}
          Nicola Esposito
        
        </div>
      </Container>
    </footer>
  );
}

export default DarkFooter;
