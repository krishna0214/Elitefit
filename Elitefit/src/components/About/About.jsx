import React from 'react';
import pen1 from "../../assets/Images/pen1.jpg"
import pen2 from "../../assets/Images/pen2.jpg"
import pen3 from "../../assets/Images/pen3.jpg"
import pen4 from "../../assets/Images/pen4.jpg"
import pen5 from "../../assets/Images/pen5.jpg"
import pen6 from "../../assets/Images/pen6.jpg"
import image7 from "../../assets/Images/pen7.jpg"
import lady from "../../assets/Images/lady.jpg"
import alex from "../../assets/Images/alex.jpg"
import emily from "../../assets/Images/emily.jpg"
import david from "../../assets/Images/david.jpg"
import lisa from "../../assets/Images/lisa.jpg"

function About() {

  return(
    <div>
<div className="grid grid-cols-2">
  <div className="col-span-1 border-2 flex items-center justify-center ">
    <img src={pen1} alt="Logo" className="h-auto w-full" />
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={pen2} alt="Logo" className=" h-auto w-full" />
  </div>
</div> 
<div className="grid grid-cols-2">
  <div className="col-span-1 border-2 flex items-center justify-center ">
    <img src={pen3} alt="Logo" className="h-auto w-full" />
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={pen4} alt="Logo" className="h-auto w-full " />
  </div>
</div> 
<div className="grid grid-cols-2">
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={pen5} alt="Logo" className="h-auto w-full" />
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={pen6} alt="Logo" className="h-auto w-full " />
  </div>
</div> 
<div className="grid grid-cols-1">
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={image7} alt="Logo" className="h-auto w-full" />
  </div>  
</div> 

<div className="grid grid-cols-2">
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={lady} alt="Logo" className="h-3/4 w-3/4" />
  </div>
</div>
<div className="grid grid-cols-1">
  <div className="col-span-1 border-2 flex items-center justify-center">
    <h className="p-10">TESTIMONALS</h>
  </div>
</div> 
<div className="grid grid-cols-4 gap-10 rounded-md">
  <div className="col-span-1 border-2 flex items-center justify-center rounded-lg">
    <img src={alex} alt="Logo" className="h-full w-full"></img>
  </div>  
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={emily} alt="Logo" className="h-full w-full" />
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={david} alt="Logo" className="h-full w-full " />
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={lisa} alt="Logo" className="h-full w-full" />
  </div>
</div>




</div>
  );
 
};

export default About;
