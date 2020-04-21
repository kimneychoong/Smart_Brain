import React from 'react';
import './FaceRecogniton.css'; 

const FaceRecognition = ({imageUrl, box}) => {
    console.log(box);
    return (
        <div className = "center ma">
            <div className ='absolute mt2'>
            <img id = 'inputImage' alt = "" src = {imageUrl} width = '400px' height = 'auto'></img>
            
            <div className = 'bounding-box' style ={{top: box.topRow, right: box.rightCol, bottom: box.bottomRow, left: box.leftCol}} ></div>
            </div>

        </div>
    );
}

export default FaceRecognition;