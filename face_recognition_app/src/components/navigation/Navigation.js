import React from 'react';

const Navigation = ({ onRouteChange, isSignedIn }) => {
    if (isSignedIn) {
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className='f6 white pa3'>Face Detection App</p>
                    <p onClick={() => onRouteChange('signout')} className='f6 link dim white pa3 pointer'>Sign Out</p>
                </nav>
            </div >
        );
    } else {
        return (
            <div>
                <nav style={{ display: 'flex', justifyContent: 'flex-end' }}>
                    <p className='f6 black pa3 b--solid'>Face Detection App</p>
                    <p onClick={() => onRouteChange('signin')} className='f6 link dim black pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f6 link dim black pa3 pointer'>Register</p>
                </nav>
            </div>
        );
    }
}

export default Navigation;
