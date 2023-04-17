import { FaChevronRight } from "@react-icons/all-files/fa/FaChevronRight";
import React, { useState } from "react";
import { FaChevronLeft } from "@react-icons/all-files/fa/FaChevronLeft";
import { FaBoxOpen } from "@react-icons/all-files/fa/FaBoxOpen";
import { RiMoneyDollarBoxFill } from "@react-icons/all-files/ri/RiMoneyDollarBoxFill";
import { AiOutlineBarChart } from "@react-icons/all-files/ai/AiOutlineBarChart";
import { FaCoins } from "@react-icons/all-files/fa/FaCoins";
import { HiUserGroup } from "@react-icons/all-files/hi/HiUserGroup";
import { FaArchive } from "@react-icons/all-files/fa/FaArchive";

import "./index.scss";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className={`sidebar ${isOpen ? "open" : ""}`}>
        <button onClick={toggleSidebar} className="toggle-btn">
          {isOpen ? (
            <i>
              <FaChevronLeft size={20} />
            </i>
          ) : (
            <i>
              <FaChevronRight size={20} />
            </i>
          )}
        </button>

        <div className="icon">
          <div className="avatar">
            {" "}
            <img
              alt="bg"
              src={`${process.env.PUBLIC_URL}/images/man.png`}
            ></img>
            <div className="user">
              {" "}
              <p
                className={` ml-5 mt-1 text-lg delay-75 transition-all  ${
                  !isOpen && "scale-0"
                } `}
              >
                User
              </p>
              <p
                className={` ml-5 mt-1 text-lg delay-75 transition-all text-gray-400 ${
                  !isOpen && "scale-0"
                } `}
              >
                ID:09123681235
              </p>
            </div>
          </div>

          <div className="icons">
            <FaCoins size={35} />
            <p className={`word   ${!isOpen && "scale-0"} `}>Revenue</p>
          </div>
          <div className="icons">
            <AiOutlineBarChart size={35} />
            <p className={` word  ${!isOpen && "scale-0"} `}>Statistics</p>
          </div>
          <div className="icons">
            <RiMoneyDollarBoxFill size={35} />
            <p className={` word   ${!isOpen && "scale-0"} `}>Sales</p>
          </div>
          <div className="icons">
            <FaArchive size={35} />
            <p className={` word  ${!isOpen && "scale-0"} `}>Projects</p>
          </div>
          <div className="icons">
            <HiUserGroup size={35} />
            <p className={` word  ${!isOpen && "scale-0"} `}>Employees</p>
          </div>
          <div className="icons">
            <FaBoxOpen size={35} />
            <p className={` word  ${!isOpen && "scale-0"} `}>Product</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
