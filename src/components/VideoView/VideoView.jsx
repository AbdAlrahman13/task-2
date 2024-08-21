import "../../style.css";
import "./VideoView.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

import VideoBox from "../VideoBox/VideoBox";
import Title from "../Title/Title"
function VideoView() {
  return (
    <div className="content_VideoView">
      <div className="Video_image">
        <img src="/images/img.jpg" alt="" />
        <div className="text_Video">
          <Title title="VIDEO VIEW"/>
          <p>Get Closer View</p>
          <p>& Different</p>
          <p>Feeling</p>

          
        </div>
      </div>
      <div className="Video_Frame">
        <img src="/images/video-frame.jpg" alt="" />
        <FontAwesomeIcon icon={faCirclePlay}  className="icon_Video"/>
      </div>
      <div className="Video_Boxes">
        <VideoBox number="34" text={`Buildings Finished Now`} />
        <VideoBox number="12" text="Years Experience" />
        <VideoBox number="24" text="Awards Won 2023" />
      </div>
    </div>
  );
}

export default VideoView;
