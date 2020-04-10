import React from 'react';
import Tilt from 'react-tilt'
import Brain from './brainicon.png'
const Logo = () => {
    return (
        <div className = 'ma4 mt0'>
            <Tilt className="br2 shadow-2" options={{ max : 45 }} style={{ height: 150, width: 150 }} >
                <div className = "pa4"> 
                    <img alt = 'icon' src = {Brain}/>
                </div>
            </Tilt>

        </div>
    );
}

export default Logo;