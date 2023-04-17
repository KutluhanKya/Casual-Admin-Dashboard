import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./login";

const AuthViews = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
      <Route path="*" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  );
};

export default AuthViews;
