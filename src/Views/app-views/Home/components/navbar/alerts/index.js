import React, { useState, useEffect } from "react";
import { MdNotificationsNone } from "@react-icons/all-files/md/MdNotificationsNone";
import "../index.scss";

function NotificationsDropdown() {
  const [notifications, setNotifications] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // API'den örnek bildirimler al
    const exampleNotifications = [
      { id: 1, text: "You have a new message" },
      { id: 2, text: "Your order has shipped" },
      { id: 3, text: "Your account has been updated" },
    ];
    setNotifications(exampleNotifications);
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="notifications-dropdown">
      <div className="notifications-icon">
        {notifications.length > 0 && (
          <div className="bg-red-600  ml-5 p-1   text-white rounded-full ">
            {notifications.length}
          </div>
        )}

        <div>
          <MdNotificationsNone size={38} onClick={() => toggleDropdown()} />
        </div>
      </div>
      <div
        className={`absolute text-black p-4 right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all transform ${
          isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
        }`}
      >
        {" "}
        <div className="p">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <div className="p-3 hover:bg-slate-300" key={notification.id}>
                <ul>
                  <li>{notification.text}</li>
                </ul>
              </div>
            ))
          ) : (
            <div className="no-notifications">No notifications</div>
          )}
        </div>
      </div>
    </div>
  );
}

export default NotificationsDropdown;
