import "../../style.css"
import "./ContactInfo.css"
function ContactInfo({image,text1,text2}) {
  return (
    <div className="Info">
      <img src={image} alt="" />
      <div className="text_contact">
        <p className="text1">{text1}</p>
        <p className="text2">{text2}</p>
      </div>
    </div>
  )
}

export default ContactInfo