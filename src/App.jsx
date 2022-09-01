import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Index";
import RegisterScreen from "./Screens/RegisterScreen/Index";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./Screens/ResetPassword/Index";
import ForgetPassword from "./Screens/ForgetPasword/Index";
import Home from './Screens/Home/Index';
import scroll_up from './assets/icons/ic_scroll_to_top .svg';

function App() {

  const [isLoggedIn, setisLoggedIn] = useState(null);

  const logIn = () => {
    setisLoggedIn(true);
  };

  const clearCacheData = () => {
    caches.keys().then((names) => {
      names.forEach((name) => {
        caches.delete(name);
      });
    });
  };

  useEffect(() => {
    clearCacheData();
  }, [])

  return (
    <>
      <ToastContainer />
      <span className='arrow-box'>
      <img src={scroll_up} alt="scroll-up" />
      </span>
      <Routes>
        <Route path="/" element={<Login logIn={logIn} />} />
        <Route path="/register" element={<RegisterScreen logIn={logIn} />} />
        <Route path="/forgot-password" element={<ForgetPassword logIn={logIn} />} />
        <Route path="/reset-password" element={<ResetPassword logIn={logIn} />} />
        <Route path="/home" element={<Home  />} />
      <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </>
  );
}

export default App;
