import "./NavBar.css";
import "../../style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGift } from "@fortawesome/free-solid-svg-icons";
import BtnNav from "../BtnNav/BtnNav"
import { faBars } from "@fortawesome/free-solid-svg-icons";

function NavBar() {
   function Show(){
      const menu=document.querySelector(".menu")
      menu.classList.toggle("active")
   }

  return (
    <div className="container">
      <div className="NavBar">
        <span className="logo">VILLA</span>
        <ul className="list">
          <li>
            <a href="#" className="active">Home</a>
          </li>
          <li>
            <a href="#">Properties</a>
          </li>
          <li>
            <a href="#">Property Details</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <BtnNav/>
        </ul>
          <button onClick={Show} className="bars"><FontAwesomeIcon icon={faBars} /></button>
      </div>
      <div className="menu">
        <ul >
          <li>
            <a href="#" className="active">Home</a>
          </li>
          <li>
            <a href="#">Properties</a>
          </li>
          <li>
            <a href="#">Property Details</a>
          </li>
          <li>
            <a href="#">Contact Us</a>
          </li>
          <BtnNav/>
        </ul>

        </div>
    </div>
  );
}

export default NavBar;
