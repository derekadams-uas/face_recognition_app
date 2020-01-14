import React from 'react';
import ProfileIcon from '../profile/ProfileIcon';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <ProfileIcon />
                    <p onClick={() => onRouteChange('signout')} className='f6 link dim black pa3 pointer'>Sign Out</p>
                </nav>
            </div >
        );
    } else {
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p onClick={() => onRouteChange('signin')} className='f6 link dim black pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f6 link dim black pa3 pointer'>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;
