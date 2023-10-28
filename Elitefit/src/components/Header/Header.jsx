// NavBar.js

import React from 'react';
import './custom.css'; // Import the custom CSS file
import logo from "../../assets/Images/logo.jpg"; 
import search from "../../assets/Images/search.jpg"; 
import cart from "../../assets/Images/cart.jpg"; 


const Header = () => {
  return (
    <nav className="navbar border-2">
    <div className="grid grid-cols-5 h-full">
  <div className="col-span-1 border-2 flex items-center">
    <img src={logo} alt="Logo" className="h-auto w-auto mx-4" />
  </div>
  <div className="col-span-3 border-2 flex justify-center items-center">
    <ul className="flex mx-4 ">
      <li className="nav-item px-5">NEW</li>
      <li className="nav-item px-5">BRANDS</li>
      <li className="nav-item px-5">COLLECTIONS</li>
      <li className="nav-item px-5">ACCESSORIES</li>
      <li className="nav-item px-5">ABOUT</li>
    </ul>
  </div>
  <div className="col-span-1 border-2 flex items-center justify-center">
    <img src={cart} alt="Logo" className="mx-10 h-auto w-auto " />
    <img src={search} alt="Logo" className="align h-auto w-auto " />
  </div>
 
</div>

  </nav>
  
  );
};

export default Header;
