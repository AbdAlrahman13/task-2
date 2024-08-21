import "./VideoBox.css"
import "../../style.css";

function VideoBox({number,text}) {
  return (
    <div className="Box_Video">
        <p className="number">{number}</p>
        <p className="text_video">{text}</p>
    </div>
  )
}

export default VideoBox