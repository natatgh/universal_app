import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="AppName">AppName</div>
      
      <div id="email">
        <input type="email" placeholder="Enter your email" />
      </div>
      
      <div id="password">
        <input type="password" placeholder="Enter your password" />
      </div>
      
      <div className="forgot_password">
        <a href="#forgot-password">Forgot password?</a>
      </div>
      
      <div id="enter_button">
        <button type="submit">ENTER</button>
      </div>

      <div className="options">
        {/* Sem conteúdo específico definido */}
        or login with
      </div>
      
      <div id="other_options">
        <button className="social-button facebook">
          <img src="/public/img/facebook-logo.png" alt="Login with Facebook" />
        </button>
        <button className="social-button google">
          <img src="/public/img/google-logo.png" alt="Login with Google" />
        </button>
        <button className="social-button apple">
          <img src="/public/img/apple-logo.png" alt="Login with Apple ID" />
        </button>
      </div>
      
      <div id="not_have_account">
        Don't have an account? <a href="#register">Register now</a>
      </div>
    </div>
  );
}

export default App;
