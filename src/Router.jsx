import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import DHTInfo from './pages/info/DHTInfo';
import SoilInfo from './pages/info/SoilInfo';
import CDSInfo from './pages/info/CDSInfo';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dht" element={<DHTInfo />} />
        <Route path="/soil" element={<SoilInfo />} />
        <Route path="/lux" element={<CDSInfo />} />
      </Routes>
    </BrowserRouter>
  );
}
