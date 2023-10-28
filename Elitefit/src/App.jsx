import React from 'react';
import './index.css'
import Banner from "./components/Banner/Banner.jsx";
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx'

const App = () => {
  return (
    <div>
      <Banner />
      <Header />
      <About/>
      
      
    </div>
    
  );
};

export default App;
