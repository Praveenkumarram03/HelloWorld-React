// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';  // Import App component
import './index.css';  // You can add custom CSS styles here

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />  {/* Render the App component */}
  </React.StrictMode>
);
