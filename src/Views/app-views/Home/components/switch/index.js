import React, { useEffect, useState } from "react";
import "./index.scss";
import { useSpring, animated } from "react-spring";
import { FiSun } from "@react-icons/all-files/fi/FiSun";
import { FaMoon } from "@react-icons/all-files/fa/FaMoon";

const Switch = () => {
  const [isOn, setIsOn] = useState(false);
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const springProps = useSpring({
    transform: isOn
      ? "translate-x-full bg-green-400"
      : "translate-x-0 bg-gray-400",
  });

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div>
      <label className="label">
        <input
          type="checkbox"
          checked={isOn}
          onChange={handleToggle}
          className="input"
        />
        <div
          onClick={() => handleThemeSwitch()}
          className={`inner ${!isOn ? "inner " : "newInner"}   `}
        >
          <animated.div
            className={`spring ${!isOn ? "spring " : "animated"}   `}
            style={springProps}
          >
            <span className="switch">
              {isOn ? <FaMoon size={22} /> : <FiSun size={22} />}
            </span>
          </animated.div>
        </div>
      </label>
    </div>
  );
};

export default Switch;
