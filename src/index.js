import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Router from './Router';
import './styles/global.css';

axios.defaults.baseURL = 'http://34.64.88.23/';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
