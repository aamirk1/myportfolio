import React from 'react';
import ReactDOM from 'react-dom/client';
import HomePage from './Components/HomePage';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <HomePage />
    {/* <App /> */}
  </React.StrictMode>
);
