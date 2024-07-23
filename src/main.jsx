import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { initGA, logPageView } from './analytics.js';

// Initialize Google Analytics
initGA();

const root = ReactDOM.createRoot(document.getElementById('root'));

// Function to log page views
const logPageViewOnRender = () => {
  logPageView();
};

// Render the app
root.render(
  <React.StrictMode>
    <App logPageView={logPageViewOnRender} />
  </React.StrictMode>
);
