import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css'; // Import global stylesheet containing all style systems

// Render the application wrapped in React StrictMode into the root DOM node
// This acts as an entry point for Vite-based development builds if switched in the future.
ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);