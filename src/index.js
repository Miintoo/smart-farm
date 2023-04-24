import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import Main from './pages/Main.jsx';

const mainElement = document.querySelector('#root');
const root = createRoot(mainElement);

root.render(<Main />);
