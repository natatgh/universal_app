import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import App from './App';
import SignUp from './SignUp';

function Main() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<App />} />
        <Route path="/register" element={<SignUp />} />
        <Route path="/" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}

export default Main;
