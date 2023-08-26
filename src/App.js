import React from 'react';
import './global.css';
import './App.css';
import './SignUp.css';

// Constantes para imagens
const LOGO_URL = "/img/logo-geral.png";
const FACEBOOK_LOGO_URL = "/img/facebook-logo.png";
const GOOGLE_LOGO_URL = "/img/google-logo.png";
const APPLE_LOGO_URL = "/img/apple-logo.png";

// Componentes menores
const Logo = () => (
    <div className="AppName">
        <img src={LOGO_URL} alt="Foodie logo" style={{ width: "50px", marginRight: "10px" }} />
        <strong>Foodie</strong>
    </div>
);

const InputField = ({ type, id, placeholder }) => (
    <div className="input-field" id={`${id}-field`}>
        <input type={type} placeholder=" " id={id} required />
        <label htmlFor={id}>{placeholder}</label>
    </div>
);

const SocialButton = ({ className, logo, alt }) => (
    <button className={`social-button ${className}`}>
        <img src={logo} alt={alt} />
    </button>
);

function App() {
    return (
        <div className="App">
            <Logo />
            
            <InputField type="email" id="email-input" placeholder="Enter your email" />
            <InputField type="password" id="password-input" placeholder="Enter your password" />

            <div className="forgot_password">
                <a href="#forgot-password">Forgot password?</a>
            </div>

            <div id="enter_button">
                <button type="submit"><strong>ENTER</strong></button>
            </div>

            <div className="options">
                <li></li> {/* Consider using proper separators or divs */}
                or login with
                <li></li> {/* Consider using proper separators or divs */}
            </div>

            <div id="other_options">
                <SocialButton className="facebook" logo={FACEBOOK_LOGO_URL} alt="Login with Facebook" />
                <SocialButton className="google" logo={GOOGLE_LOGO_URL} alt="Login with Google" />
                <SocialButton className="apple" logo={APPLE_LOGO_URL} alt="Login with Apple ID" />
            </div>

            <div id="not_have_account">
                Don't have an account? <a href="/register">Sign Up</a>
            </div>
        </div>
    );
}

export default App;
