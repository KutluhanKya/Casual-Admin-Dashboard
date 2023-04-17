import React, { useState, useEffect } from "react";

import "../index.scss";

function User({ setIsLoggedIn }) {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState([]);

  useEffect(() => {
    // API'den örnek bildirimler al
    const exampleNotifications = [{ id: 1, text: "Sign Out" }];
    setUser(exampleNotifications);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notifications-dropdown">
      <div className="notifications-icon">
        <div onClick={() => toggleDropdown()} className="avatar1">
          {" "}
          <img
            className="avatar"
            alt="bg"
            src={`${process.env.PUBLIC_URL}/images/man.png`}
          ></img>
          <p className="title">User</p>
        </div>
      </div>
      <div
        className={`absolute text-center hover:bg-gray-300 text-black p-2 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {" "}
        <div className="p">
          {user.length > 0 ? (
            user.map((notification) => (
              <button
                onClick={() => {
                  localStorage.removeItem("auth_token");
                  setIsLoggedIn(false);
                }}
              >
                {notification.text}
              </button>
            ))
          ) : (
            <div className="no-notifications">No notifications</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default User;
