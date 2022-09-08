import { createContext, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./Screens/Login/Index";
import { ToastContainer } from "react-toastify";
import Dashboard from './Screens/Dashboard/Index';
import UserList from './Screens/UserList/Index';
import ProfessionalList from './Screens/ProfessionalList/Index';
import PropertyList from './Screens/PropertyList/Index';
import NewsfeedList from './Screens/NewsfeedList/Index';
import RequestList from './Screens/RequestList/Index';
import StoryList from './Screens/StoryList/Index';
import PostList from './Screens/PostList/Index';
import Home from './Screens/Home/Index';
import UserProfile from './Screens/UserProfile/Index';
import ProfessionalProfile from './Screens/ProfessionalProfile/Index';
import ProtectedRoute from "./PrivateRoute";
import 'react-alice-carousel/lib/alice-carousel.css';

export const SidebarContext = createContext();

function App() {
  const [showSidebar, setShowSidebar] = useState(false);
  const [isLoggedIn, setisLoggedIn] = useState(true);

  const logIn = () => {
    setisLoggedIn(!isLoggedIn);
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
    <SidebarContext.Provider value={{ showSidebar, setShowSidebar }}>
      {/* <Button onClick={logIn
      } variant="primary">{isLoggedIn?'Logout':'Login'}</Button> */}
      <ToastContainer />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={
          <ProtectedRoute isLoggedIn={isLoggedIn}>
            <Home />
          </ProtectedRoute>
        }>
          <Route index element={<Dashboard />} />
          <Route path="user-list" element={<UserList />} />
          <Route path="professional-list" element={<ProfessionalList />} />
          <Route path="property-list" element={
            <PropertyList />} />
          <Route path="post-list" element={<PostList />} />
          <Route path="story-list" element={<StoryList />} />
          <Route path="request-list" element={<RequestList />} />
          <Route path="newsfeed-list" element={<NewsfeedList />} />
          <Route path="user-profile" element={<UserProfile />} />
          <Route path="professional-profile" element={<ProfessionalProfile />} />
        </Route>
        <Route path="*" element={<h3>Page not Found</h3>} />
      </Routes>
    </SidebarContext.Provider>
  );
}

export default App;
