import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './bootstrap-components.scss'; // trimmed-down Bootstrap CSS
import 'bootstrap/js/dist/collapse'; // // collapse for navbar-toggler
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
