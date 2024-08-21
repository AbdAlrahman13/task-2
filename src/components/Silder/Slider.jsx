import "../../style.css";
import "./Slider.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { faAngleLeft } from "@fortawesome/free-solid-svg-icons";
import { faCircle } from "@fortawesome/free-solid-svg-icons";
import { useEffect } from "react";

function Slider() {
  const slides=document.querySelectorAll(".images_slider img")
  const bull=document.querySelectorAll(".bullet");




  var count=0;

    slides.forEach((slide,index)=>{
      slide.style.left=`${index*100}%`
      console.log(slide,index)
    })


  const slideImage=()=>{
    slides.forEach((slide)=>{
        slide.style.transform=`translateX(-${count*100}%)`
    })
  }
  


  function goNext(){
    count++;
    if(count==3){
      count=0;
    }
    slideImage();
    bull.forEach((item,index)=>{
      item.classList.remove("active");
      if(index==count){
       item.classList.add("active")
      }
   })
  }
  function goPrev(){
    count--;
    if(count<0){
     count=2;
    }
    slideImage();
    bull.forEach((item,index)=>{
      item.classList.remove("active");
      if(index==count){
       item.classList.add("active")
      }
   })
  }







  return (
      <div className="content">
        <div className="images_slider">
        <img src="/images/banner-01.jpg" alt=""  />
        <img src="/images/banner-02.jpg" alt=""  />
        <img src="/images/banner-03.jpg" alt=""  />
        </div>
        <div className="items">
        <p>Toronto ,<span>canada</span></p>
        <p className="p2">HURRY! <br /> GET THE <br /> BEST VILLA <br /> FOR YOU</p>
        </div>
        <button className="leftSide" onClick={goPrev}>
        <FontAwesomeIcon icon={faAngleLeft}  />
        </button>
        <button className="rightSide" onClick={goNext}>
        <FontAwesomeIcon icon={faAngleRight}  />
        </button>
      
        <div className="bullets">
        <FontAwesomeIcon icon={faCircle}  className="bullet active" />
        <FontAwesomeIcon icon={faCircle} className="bullet"/>
        <FontAwesomeIcon icon={faCircle} className="bullet"/>
        </div>


      </div>
  )
}

export default Slider