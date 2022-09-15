import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import Carousel from "./Carousel";

function Base(){
    return(
      <div>
        <Navbar></Navbar>
        <div style={{height:"115px"}}></div>
        <Carousel></Carousel>
        <Footer></Footer>

      </div>
     
   
    )
}
export default Base;