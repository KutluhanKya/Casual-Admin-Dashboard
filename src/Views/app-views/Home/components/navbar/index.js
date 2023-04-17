import React from "react";
import "./index.scss";

import Switch from "../switch";
import NotificationsDropdown from "./alerts";
import User from "./user";

const Navbar = ({ setIsLoggedIn }) => {
  return (
    <div className="navbar">
      <div>
        <Switch />
      </div>
      <div>
        <NotificationsDropdown />
      </div>

      <div className="avatar1">
        <User setIsLoggedIn={setIsLoggedIn} />
      </div>
    </div>
  );
};

export default Navbar;
