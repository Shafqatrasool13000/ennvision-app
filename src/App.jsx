import React, { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Index";
import RegisterScreen from "./Screens/RegisterScreen/Index";
import { ToastContainer } from "react-toastify";
import Dashboard from './Screens/Dashboard/Index';
import UserList from './Screens/UserList/Index';
import ProfessionalList from './Screens/ProfessionalList/Index';
import PropertyList from './Screens/PropertyList/Index';
import NewsfeedList from './Screens/NewsfeedList/Index';
import RequestList from './Screens/RequestList/Index';
import StoryList from './Screens/StoryList/Index';
import PostList from './Screens/PostList/Index';
import Sidebar from './Components/Sidebar/Index';

export const SidebarContext=createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(false);

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
    <SidebarContext.Provider value={{showSidebar,setShowSidebar}}>
      <ToastContainer />
     
   <Sidebar/>
      <Routes>
        <Route path="/" element={<Login logIn={logIn} />} />
        <Route path="/dashboard" element={<Dashboard logIn={logIn} />} />
        <Route path="/register" element={<RegisterScreen logIn={logIn} />} />
        <Route path="/user-list" element={<UserList logIn={logIn} />} />
        <Route path="/professional-list" element={<ProfessionalList logIn={logIn} />} />
        <Route path="/property-list" element={<PropertyList logIn={logIn} />} />
        <Route path="/post-list" element={<PostList logIn={logIn} />} /> 
        <Route path="/story-list" element={<StoryList logIn={logIn} />} /> 
        <Route path="/request-list" element={<RequestList logIn={logIn} />} />
        <Route path="/newsfeed-list" element={<NewsfeedList logIn={logIn} />} />
        <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </SidebarContext.Provider>
  );
}

export default App;
