import "./FeatureInfo.css";

function Feature_info({ img, header, paragraph, underImage }) {
  return (
  
    <div className="my_content">
      <div className="image_content">
        <img src={img} alt="" />
        <p className="under">{underImage}</p>
      </div>
      <div className="info">
        <h3>{header}</h3>
        <p>{paragraph}</p>
      </div>
    </div>
  );
}

export default Feature_info;
