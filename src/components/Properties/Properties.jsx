import Card from "../Card/Card";
import "../../style.css";
import "./Properties.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
function Properties() {
  return (
    <div className="content_Properties">
      <div className="container">
         <div className="text_Properties">
         <Title title="PROPERTIES" />
         <SubTitle subTitle="We Provide The Best Property You Like" />
         </div>
        <div className="cards">
          <Card
            image="/images/property-01.jpg"
            NBedroom={"8"}
            NBathroom={"8"}
            area={"125"}
            floor={"3"}
            parking={"6 spots"}
            header={"18 New Street Miami, OR 97219"}
            text={"Luxury Villa"}
            price={"2.264.000"}
          />
             <Card
            image="/images/property-02.jpg"
            NBedroom={"6"}
            NBathroom={"5"}
            area={"450"}
            floor={"3"}
            parking={"8 spots"}
            header={"54 Mid Street Florida, OR 27001"}
            text={"Luxury Villa"}
            price={"1.180.000"}
          />
             <Card
            image="/images/property-03.jpg"
            NBedroom={"5"}
            NBathroom={"4"}
            area={"225"}
            floor={"3"}
            parking={"10 spots"}
            header={"26 Old Street Miami, OR 38540"}
            text={"Luxury Villa"}
            price={"1.460.000"}
          />
             <Card
            image="/images/property-04.jpg"
            NBedroom={"4"}
            NBathroom={"3"}
            area={"125"}
            floor={"25th"}
            parking={"2 cars"}
            header={"12 New Street Miami, OR 12650"}
            text={"Appartment"}
            price={"584.500"}
          />
             <Card
            image="/images/property-05.jpg"
            NBedroom={"4"}
            NBathroom={"4"}
            area={"180"}
            floor={"38th"}
            parking={"2 cars"}
            header={"34 Beach Street Miami, OR 42680"}
            text={"Penthouse"}
            price={"925.600"}
          />
             <Card
            image="/images/property-06.jpg"
            NBedroom={"3"}
            NBathroom={"2"}
            area={"165"}
            floor={"26th"}
            parking={"3 cars"}
            header={"22 New Street Portland, OR 16540"}
            text={"Modern Condo"}
            price={"450.000"}
          />
        </div>
      </div>
    </div>
  );
}

export default Properties;
