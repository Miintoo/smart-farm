import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles/global.css';
import RouteApp from './Routes';

const mainElement = document.querySelector('#root');
const root = createRoot(mainElement);

root.render(<RouteApp />);
