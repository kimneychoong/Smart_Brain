import React, { Component } from 'react';
import Navigation from "./components/Navigation/Navigation";
import Logo from "./components/Logo/Logo"
import ImageLinkForm from "./components/ImageLinkForm/ImageLinkForm.js"
import Rank from "./components/Rank/Rank"
import './App.css';
import Particles from 'react-particles-js';
import Clarifai from 'clarifai';
import FaceRecognition from './components/FaceRecognition/FaceRecognition.js'
import SignIn from './components/SignIn/SignIn'

const app = new Clarifai.App({
  apiKey: '4f80bfa928bf4e1393303a55dafeec3d'
});

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


class App extends Component {
  constructor (){
    super();
    this.state = {
      input : '',
      imageUrl: '',
      displayBox: {},
    }
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputImage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row *height,
      rightCol : width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    console.log(box);
    this.setState({displayBox:box});
  }

  onInputChange = (event) =>{
    this.setState({input:event.target.value});

  }
  onButtonSubmit = () =>{
    this.setState({imageUrl:this.state.input})
    console.log('click');
    app.models.predict(Clarifai.FACE_DETECT_MODEL, this.state.input)
    .then(response => this.displayFaceBox(this.calculateFaceLocation(response)))
    .catch (err => console.log(err));
  }
  render(){
    return (
      <div className="App">
        <Particles className = 'particles'
          params={particlesOptions}
        />
        <Navigation/>
        <SignIn/>
        <Logo />
        <Rank />
        <ImageLinkForm 
        onInputChange = {this.onInputChange}
        onButtonSubmit = {this.onButtonSubmit}
        />
        <FaceRecognition imageUrl={this.state.imageUrl} box={this.state.displayBox}/>

      </div>
    );
  }
}

export default App;
 