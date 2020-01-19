import React from 'react';
import './Profile.css';

const Profile = ({ isProfileOpen, toggleModal, user }) => {
    return (
        <div className="profile-modal">
            <article className="br3 ba b--black-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center bg-white">
                <main className="pa4 black-80 w-80">
                    <img src="http://tachyons.io/img/logo.jpg" className="br-100 ba h3 w3 dib" alt="avatar" />
                    <h1>Username: </h1>
                    <h4>Images Submitted: 5</h4>
                    <p>Member Since: January</p>
                    <hr />
                    <label className="mt2 fw6" htmlFor="user-name">Name:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="Name"
                        type="text"
                        name="user-name"
                        id="name"
                    />
                    <label className="mt2 fw6" htmlFor="user-age">Age:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="Age"
                        type="text"
                        name="user-age"
                        id="age"
                    />
                    <label className="mt2 fw6" htmlFor="user-name">Pet:</label>
                    <input
                        className="pa2 ba w-100"
                        placeholder="Pet"
                        type="text"
                        name="user-pet"
                        id="pet"
                    />
                </main>
            </article>
        </div>
    )
}

export default Profile;
