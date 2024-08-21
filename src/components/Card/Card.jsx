// import "../../style.css"
import "./Card.css";
import BtnNav from "../BtnNav/BtnNav";

function Card({image,header,text,price,NBedroom,NBathroom,area,floor,parking}) {
  return (
    <div className="card">
        <div className="image_card">
            <img src={image} alt="" />
        </div>
        <div className="text_card">
            <p className="first">{text}</p>
            <p className="price">${price}</p>
        </div>
         <h2>{header}</h2>
         <div className="info_card">
            <span className="type">Bedrooms: <span className="arg">{NBedroom}</span></span>
            <span className="type">Bathrooms: <span className="arg">{NBathroom}</span></span>
            <br />
            <span className="type">Area: <span className="arg">{area}m2</span></span>
            <span className="type">Floor: <span className="arg">{floor}</span></span>
            <br />
            <span className="type">Parking:<span className="arg">{parking}</span> </span>



         </div>
         <hr  className="hr1"/>

         <p className="button">Schedule a visit</p>
    </div>
  )
}

export default Card