import "../../style.css";
import "./Deal.css";
import Title from "../Title/Title";
import SubTitle from "../SubTitle/SubTitle";
import FeatureInfo from "../Featured/FeatureInfo";
import BtnNav from "../BtnNav/BtnNav";
function Deal() {
  return (
     <div className="contentPrime">
          <div className="container">
      <div className="content_Deal">
        <div className="text_Deal">
          <Title title={"Best Deal"} />
          <SubTitle subTitle="Find Your Best Deal Right Now!" />
        </div>
        <div className="buttons">
          <button className="active">Appartment</button>
          <button>VillaHouse</button>
          <button>Penthouse</button>
        </div>
      </div>
      <div className="body_Deal">
         <div className="features2">
        <FeatureInfo underImage={"Total Flat Space"} header={"185 m2"}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Floor number"} header={"26 th"}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Number of rooms"} header={"4"}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Parking Available"} header={"Yes"}/>
        <hr className="h2" />
        <FeatureInfo underImage={"Payment Process"} header={"Bank"}/>
         </div>
         <img src="/images/deal-01.jpg" alt="" className="my_image" />
         <div className="text">
              <h3 className="title">Extra Info About Property</h3>
              <p className="lorem">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos cupiditate, vero ipsum et quae autem necessitatibus enim. Deserunt explicabo molestiae eligendi! Sapiente.</p>
              <br />
              <p className="paragraph2">
                When You need free CSS templates,You can simply type TemplateMo in any search engine website. In addition,You can type TemplateMo portfolio,TemplateMo One Page Layouts , etc.
              </p>
              <BtnNav/>

         </div>

      </div>

    </div>
     </div>
  );
}

export default Deal;
