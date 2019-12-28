import React from 'react';
import Tilt from 'react-tilt';
import face_icon from './face_icon.png';
import './Logo.css';

const Logo = () => {
    return (
        <div className='ma4 mt0'>
            <Tilt className="Tilt br2 shadow-2" options={{ max: 25 }} style={{ height: 75, width: 75 }} >
                <div className="Tilt-inner pa3"><img style={{ textAlign: 'center' }} alt='logo' src={face_icon} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;
