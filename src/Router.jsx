import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './pages/auth/Login';
import ChangePassword from './pages/auth/ChangePassword';

const RegisterComponent = lazy(() => import('./pages/auth/Register'));
const MainComponent = lazy(() => import('./pages/main/Main'));
const MyPageComponent = lazy(() => import('./pages/main/MyPage'));
const ChangeUserInfoComponent = lazy(() => import('./pages/main/ChangeUserInfo'));
const SignOutComponent = lazy(() => import('./pages/main/SignOut'));
const DHTInfoComponent = lazy(() => import('./pages/info/DHTInfo'));
const SoilInfoComponent = lazy(() => import('./pages/info/SoilInfo'));
const CDSInfoComponent = lazy(() => import('./pages/info/CDSInfo'));
const NotFoundSceneComponent = lazy(() => import('./pages/NotFoundScene'));

export default function Router() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/main" element={<MainComponent />} />
          <Route path="/mypage" element={<MyPageComponent />} />
          <Route path="/change/password" element={<ChangePassword />} />
          <Route path="/change/userinfo" element={<ChangeUserInfoComponent />} />
          <Route path="/signout" element={<SignOutComponent />} />
          <Route path="/register" exact element={<RegisterComponent />} />
          <Route path="/dht" element={<DHTInfoComponent />} />
          <Route path="/soil" element={<SoilInfoComponent />} />
          <Route path="/lux" element={<CDSInfoComponent />} />
          <Route path="*" element={<NotFoundSceneComponent />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
