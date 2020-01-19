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
                    <div className="measure">
                        <label className="db fw6 lh-copy f6" htmlFor="name">Name</label>
                        <input
                            onChange={this.onNameChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                            type="text"
                            name="name"
                            id="name"
                        />
                        <input
                            onChange={this.onEmailChange}
                            className="pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                            type="email"
                            name="email-address"
                            id="email-address"
                        />
                        <input
                            onChange={this.onPasswordChange}
                            className="b pa2 input-reset ba bg-transparent hover-bg-black hover-white w-100 hover-black"
                            type="password"
                            name="password"
                            id="password"
                        />
                    </div>
                </main>
            </article>
        </div>
    )
}

export default Profile;
