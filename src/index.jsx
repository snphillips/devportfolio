import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // or whichever globals you need

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
