import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
