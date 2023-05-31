import React from 'react';
import ReactDOM from 'react-dom/client';
import axios from 'axios';
import Router from './Router';
import './styles/global.css';

axios.defaults.baseURL = 'http://13.125.30.182/api';
axios.defaults.withCredentials = true;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>
);
