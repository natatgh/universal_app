import React from 'react';
import ReactDOM from 'react-dom';
import Main from './Main'; // Importe Main ao invés de App

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);

