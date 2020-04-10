import React from 'react';
import Navigation from "./components/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js"
import Rank from "./components/Rank/Rank"
import './App.css';
import Particles from 'react-particles-js';
 
const particlesOptions = {
  particles: {
    number: {
      value:150,
      density: {
        enable: true,
        value_area: 600,
      }
    }
  }
}


function App() {
  return (
    <div className="App">
      <Particles className = 'particles'
        params={particlesOptions}
      />
      <Navigation/>
      <Logo />
      <Rank />
      <ImageLinkForm />
      
  
      {/* <FaceRecognition /> */}

    </div>
  );
}

export default App;
