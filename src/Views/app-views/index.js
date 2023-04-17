import React from "react";

import { Route, Routes } from "react-router-dom";
import Home from "./Home";

const AppViews = ({ setIsLoggedIn }) => {
  return (
    <Routes>
      <Route path="/" element={<Home setIsLoggedIn={setIsLoggedIn} />} />

      <Route path="/home" element={<Home setIsLoggedIn={setIsLoggedIn} />} />

      <Route path="*" element={<Home setIsLoggedIn={setIsLoggedIn} />} />
    </Routes>
  );
};

export default AppViews;
