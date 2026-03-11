import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap CSS (installed via npm)
import 'bootstrap/dist/css/bootstrap.min.css';

// Custom global styles & design tokens
import './styles/global.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
