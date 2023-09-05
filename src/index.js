import React from 'react';
import ReactDOM from 'react-dom/client';
import Routing from './routes/Routing';
import './css/Reset.css';
import './css/Style.css';
// import "./css/s"

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Routing />
  </React.StrictMode>
);


