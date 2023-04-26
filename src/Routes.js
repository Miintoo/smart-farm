import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';

const Main = lazy(() => import('./Main.jsx'));
const Login = lazy(() => import('./Login.jsx'));

export default function RouteApp() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}
