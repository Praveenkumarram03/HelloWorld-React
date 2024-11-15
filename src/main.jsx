// src/main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';  // React 18 uses 'react-dom/client'
import App from './App';  // Import the main App component

// Create a root element and render the App component into it
ReactDOM.createRoot(document.getElementById('app')).render(
  <React.StrictMode>
    <App />  {/* Render the root App component */}
  </React.StrictMode>
);
