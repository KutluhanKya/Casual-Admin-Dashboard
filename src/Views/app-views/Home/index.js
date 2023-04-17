import React from "react";
import Contain from "./components/contain";
import Navbar from "./components/navbar";
import Sidebar from "./components/sidebar";
import "./index.scss";

const Home = ({ setIsLoggedIn }) => {
  return (
    <div className="home">
      <div>
        <Sidebar />
      </div>
      <Navbar setIsLoggedIn={setIsLoggedIn} />
      <div>
        <Contain />
      </div>
    </div>
  );
};

export default Home;
