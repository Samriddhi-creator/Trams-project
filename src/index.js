import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Import global stylesheet containing all style systems
import App from './App';
import reportWebVitals from './reportWebVitals';

// Initialize the root element by targeting the HTML element with ID "root"
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render the application wrapped in React StrictMode for highlighting potential problems
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Measure performance indicators in the application (optional)
// Pass a function to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
