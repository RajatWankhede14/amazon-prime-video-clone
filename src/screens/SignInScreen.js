import React from 'react';
import './SignInScreen.css';

function SignInScreen() {
    return (
        <div className="signInScreen">
            <img className="signIn__logo" src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/avod/AV_Logo_150._CB430404026_.png" alt="prime_logo"/>
            <div className="signIn__body">
            <h2>Sign-In</h2>
                <form>
                    <label for="email_address">Email or mobile phone number</label><br/>
                    <input className="signIn__input" type="email" id="email_address" /><br/>
                    <label for="password">Password</label>
                    <span>Forgot your password?</span>
                    <br/>
                    <input type="password" className="signIn__input" id="password"/><br/>
                    <button className="signIn__button" type="submit">Sign-In</button>
                    <p className="signIn__condition">By continuing, you agree to Amazon's <span>Conditions of Use </span> and <span>Privacy Notice</span>.</p>
                    <p className="signIn__condition">
                    <input type="checkbox"/> 
                    Keep me signed in. <span>Details</span>
                    </p>
                    <div className="create">
                        <p className="signIn__newAcc">New to Amazon?</p>
                        <button className="signIn__createbtn">Create your Amazon account</button>
                    </div>
                    
                </form>
            </div>
        </div>
    )
}

export default SignInScreen
