import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import LoginScreen from "./Screens/LoginScreen/Index";
import RegisterScreen from "./Screens/RegisterScreen/Index";
import { ToastContainer } from "react-toastify";
import ResetPassword from "./Screens/ResetPassword/Index";
import ForgetPassword from "./Screens/ForgetPasword/Index";

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
    <div className="ninja-main-container">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<LoginScreen logIn={logIn} />} />
        <Route path="/register" element={<RegisterScreen logIn={logIn} />} />
        <Route path="/forgot-password" element={<ForgetPassword logIn={logIn} />} />
        <Route path="/reset-password" element={<ResetPassword logIn={logIn} />} />
      </Routes>
    </div>
  );
}

export default App;
