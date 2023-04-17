import React from "react";
import "./index.scss";
import { BiDotsVerticalRounded } from "@react-icons/all-files/bi/BiDotsVerticalRounded";
import { FaBoxOpen } from "@react-icons/all-files/fa/FaBoxOpen";
import { AiOutlineBarChart } from "@react-icons/all-files/ai/AiOutlineBarChart";
import { FaArchive } from "@react-icons/all-files/fa/FaArchive";

import { RiMoneyDollarBoxFill } from "@react-icons/all-files/ri/RiMoneyDollarBoxFill";
import Graph from "./graph";
import Pies from "./pie";
const Contain = () => {
  return (
    <div className="contain">
      <div className="first">
        {" "}
        <div className="box2">
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Projects</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              <div>
                <FaBoxOpen size={45} />
              </div>

              <span className="number"> 100.250</span>
            </div>
          </div>

          <div className="box1">
            <div className="inner1">
              <h1 className="title">Total Product</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              <div>
                <FaBoxOpen size={45} />
              </div>

              <span className="number"> 100.250</span>
            </div>
          </div>
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Sales Analytics</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              {" "}
              <div>
                <FaArchive size={45} />
              </div>
              <span className="number"> 10.000</span>
            </div>
          </div>
        </div>
        <div className="box3">
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Statistics</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              {" "}
              <div>
                <AiOutlineBarChart size={45} />
              </div>
              <span className="number"> %38</span>
            </div>
          </div>
          <div className="box1">
            <div className="inner1">
              <h1 className="title">Daily Sales</h1>
              <span className="dot">
                <BiDotsVerticalRounded />
              </span>
            </div>
            <div className="data">
              {" "}
              <div>
                <RiMoneyDollarBoxFill size={45} />
              </div>
              <span className="number"> 10.000</span>
            </div>
          </div>
        </div>
        <div className="graph1">
          <Graph />
        </div>
        <div className="graph2">
          <Pies />
        </div>
      </div>
    </div>
  );
};

export default Contain;
