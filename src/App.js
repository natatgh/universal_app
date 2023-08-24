import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <div className="AppName">
                <img src="/img/logo-geral.png" alt="Foodie logo" style={{ width: "50px", marginRight: "10px" }} />
                <strong>Foodie</strong>
            </div>

            <div className="input-field" id="email-field">
                <input type="email" placeholder=" " id="email-input" required />
                <label htmlFor="email-input">Enter your email</label>
            </div>

            <div className="input-field" id="password-field">
                <input type="password" placeholder=" " id="password-input" required />
                <label htmlFor="password-input">Enter your password</label>
            </div>

            <div className="forgot_password">
                <a href="#forgot-password">Forgot password?</a>
            </div>

            <div id="enter_button">
                <button type="submit"><strong>SIGN UP</strong></button>
            </div>

            <div className="options">
                <li></li>
                or login with
                <li></li>
            </div>

            <div id="other_options">
                <button className="social-button facebook">
                    <img src="/img/facebook-logo.png" alt="Login with Facebook" />
                </button>
                <button className="social-button google">
                    <img src="/img/google-logo.png" alt="Login with Google" />
                </button>
                <button className="social-button apple">
                    <img src="/img/apple-logo.png" alt="Login with Apple ID" />
                </button>
            </div>

            <div id="not_have_account">
                Don't have an account? <a href="#register">Register now</a>
            </div>
        </div>
    );
}

export default App;
