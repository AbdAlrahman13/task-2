import "./TopBar.css";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faMap } from "@fortawesome/free-regular-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
function NavBar() {
  return (
    <div className="container">
      <div className="TopBar">
        <div className="info">
          <span className="email">
            <FontAwesomeIcon icon={faEnvelope} className="icon"/>
            info@company.com
            </span>
          <span className="Text">
            <FontAwesomeIcon icon={faMap} className="icon"/>
            Sunny Isles Beach,FL 33160
            </span>
        </div>
        <div className="icons">
          <a href="#">
            <FontAwesomeIcon icon={faFacebook} className="icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faTwitter} className="icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faLinkedin} className="icon" />
          </a>
          <a href="#">
            <FontAwesomeIcon icon={faInstagram} className="icon" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
