import React, { useState } from 'react';
import './global.css';
import './App.css';
import './SignUp.css';

function PasswordStrengthBar({ password }) {
    const calculateStrength = password => {
        let strength = 0;
        
        if (password.length > 5) strength++;
        if (password.match(/[A-Z]/)) strength++;
        if (password.match(/[a-z]/)) strength++;
        if (password.match(/[0-9]/)) strength++;
        if (password.match(/[^a-zA-Z0-9]/)) strength++;
        
        return strength;
    };

    const strength = calculateStrength(password);
    
    let color;
    switch(strength) {
        case 1: color = '#ff5c33'; break;  // Fraco
        case 2: color = '#ff9933'; break;  // Médio
        case 3: color = '#ffcc33'; break;  // Aceitável
        case 4: color = '#c2ff33'; break;  // Forte
        case 5: color = '#4cff33'; break;  // Muito forte
        default: color = '#e0e0e0';
    }

    return (
        <div className="password-strength-bar">
            <div style={{ width: `${strength * 20}%`, backgroundColor: color }}></div>
        </div>
    );
}

function SignUp() {
    const [password, setPassword] = useState(''); 
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [hasTypedConfirmation, setHasTypedConfirmation] = useState(false); 

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    
        if (!e.target.value && !confirmPassword) {
            setPasswordError('');
        } else if (hasTypedConfirmation && e.target.value !== confirmPassword) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordChange = e => {
        setConfirmPassword(e.target.value);
        setHasTypedConfirmation(true);
    
        if (e.target.value !== password) {
            setPasswordError('Passwords do not match');
        } else {
            setPasswordError('');
        }
    };

    const handleConfirmPasswordBlur = () => {
        if (!confirmPassword) {
            setHasTypedConfirmation(false);
            setPasswordError('');
        }
    };

    return (
        <div className="App">
            <div className="AppName">
                <img src="/img/logo-geral.png" alt="Foodie logo" style={{ width: "50px", marginRight: "10px" }} />
                <strong>Foodie</strong>
            </div>
            <div className="input-field" id="full-name-field">
                <input type="text" placeholder=" " id="full-name-input" required />
                <label htmlFor="full-name-input">Enter your full name</label>
            </div>
            <div className="input-field" id="email-field">
                <input type="email" placeholder=" " id="email-input" required />
                <label htmlFor="email-input">Enter your email</label>
            </div>
            <div className="input-field" id="password-field">
                <input 
                    type="password" 
                    placeholder=" " 
                    id="password-input" 
                    required 
                    value={password}
                    onChange={handlePasswordChange}
                />
                <label htmlFor="password-input">Enter your password</label>
            </div>
            <div className="password-section">
                <PasswordStrengthBar password={password} />
                <button className="help-icon">
                    ⚠️
                    <div className="help-tooltip">
                        Your password should include:<br />
                        - Uppercase letters<br />
                        - Lowercase letters<br />
                        - Numbers<br />
                        - Symbols.
                    </div>
                </button>
            </div>
            <div className="input-field" id="confirm-password-field">
                <input 
                    type="password" 
                    placeholder=" " 
                    id="confirm-password-input" 
                    required 
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    onBlur={handleConfirmPasswordBlur}
                />
                <label htmlFor="confirm-password-input">Confirm your password</label>
                {hasTypedConfirmation && <span className="password-error">{passwordError}</span>}
            </div>
            <div id="register_button">
                <button type="submit"><strong>REGISTER</strong></button>
            </div>
            <div id="already_have_account">
                Already have an account? <a href="/Login"><strong>Sign In</strong></a>
            </div>
        </div>
    );
}

export default SignUp;
