import "../NavBar/NavBar.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

function BtnNav() {
  return (
    <li >
    <a href="#" className="btn">
      <FontAwesomeIcon icon={faCalendar} className="gift" />
      <span>Schedule a visit</span>
    </a>
  </li>
  )
}

export default BtnNav