import "../../style.css";
import "./ContactUs.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import ContactInfo from "../ContactInfo/ContactInfo";
import Form from "../Form/Form";
function ContactUs() {
  return (
    <div className="content_contact">
      <div className="image_contact">
        <img src="/images/contact-bg.jpg" alt="" />
        <div className="text">
        <Title title="Contact Us"  />
        <p>Get In Touch</p>
        <p>With Our Agents</p>
        </div>
      </div>
      <div className="sec2">
        <div className="left">
          <iframe
          className="map"
        width="600"
        height="450"
        style={{ border: 0 }}
        loading="lazy"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d103885.2875067226!2d35.63612179696933!3d35.54344583290378!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1526ac2d61d4607d%3A0x8e325bf8a14195de!2sLatakia%2C%20Syria!5e0!3m2!1sen!2snl!4v1724134357945!5m2!1sen!2snl"
         />
          <div className="contact_info">
            <ContactInfo
              image="images/phone-icon.png"
              text1="010-020-0340"
              text2="Phone Number"
            />
             <ContactInfo
              image="images/email-icon.png"
              text1="info@villa.co"
              text2="Buisness Email"
            />
          </div>
        </div>
        <Form />
      </div>
    </div>
  );
}

export default ContactUs;



