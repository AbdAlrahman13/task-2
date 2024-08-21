import TopBar  from "./components/TopBar/TopBar"
import NavBar from "./components/NavBar/NavBar"
import Slider from "./components/Silder/Slider"

import Featured from "./components/Featured/Featured"

import VideoView from "./components/VideoView/VideoView"

import Deal from "./components/Deal/Deal"

import Properties  from "./components/Properties/Properties"
import ContactUs from "./components/ContactUs/ContactUs"

import Footer from "./components/Footer/Footer"
import "./style.css"





function App() {


  return (
    <>
       <TopBar/> 
       <hr />
       <NavBar/>
       <Slider/>
       <Featured/>
       <VideoView/>
       <Deal/>
      <Properties/>
      <ContactUs/>
      <Footer/>





      
    </>
  )
}

export default App
