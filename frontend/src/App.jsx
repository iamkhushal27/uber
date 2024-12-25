import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import {Route, Routes  } from "react-router-dom";
import './App.css'
import Home from './pages/home';
import UserRegister from './pages/userRegister';
import UserLogin from './pages/userlogin';
import CaptainRegister from './pages/captainRegister';
import CaptainLogin from './pages/captainLogin';

function App() {
 return <>
 <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/userregister" element={<UserRegister />} />
  <Route path="/userlogin" element={<UserLogin/>}/>
  <Route path="/captainregister" element={<CaptainRegister/>}/>
  <Route path="/captainlogin" element={<CaptainLogin/>}/>
 </Routes>
 </>
}

export default App
