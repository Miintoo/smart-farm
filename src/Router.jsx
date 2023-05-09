import React, { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import DHTInfo from './pages/info/DHTInfo';
import SoilInfo from './pages/info/SoilInfo';
import CDSInfo from './pages/info/CDSInfo';
import Register from './pages/auth/Register';
import silentRefresh from './utils/auth/silentRefresh';

export default function Router() {
  useEffect(() => {
    silentRefresh();
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dht" element={<DHTInfo />} />
        <Route path="/soil" element={<SoilInfo />} />
        <Route path="/lux" element={<CDSInfo />} />
        <Route path="/register" exact element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}
