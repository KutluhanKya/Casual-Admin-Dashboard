import React from "react";
import "./index.scss";
import axios from "axios";
import { useState } from "react";
import { FaUserAlt } from "@react-icons/all-files/fa/FaUserAlt";
import { AiTwotoneLock } from "@react-icons/all-files/ai/AiTwotoneLock";

const Login = ({ setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [password, setPassword] = useState("");

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleApi = (e) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("https://reqres.in/api/login", {
        email: email,
        password: password,
      })

      .then((result) => {
        console.log(result.data);
        console.log(email, password);

        localStorage.setItem("auth_token", result.data.token);
        setIsLoggedIn(true);
      })

      .catch((error) => {
        console.log(error);

        alert("error");
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="login">
      <div className="box">
        <div className="box1">
          <h1 className="title">USER LOGIN</h1>

          <div className="card">
            <div className="k1">
              {" "}
              <FaUserAlt className="mt-1" />
              <span className="text">Username </span>
            </div>{" "}
            <input
              value={email}
              onChange={handleEmail}
              type="text"
              className="input"
            />{" "}
            <div className="k1">
              {" "}
              <AiTwotoneLock size={25} className="mt-1" />
              <span className="text">Password</span>
            </div>
            <input
              value={password}
              onChange={handlePassword}
              type="password"
              className="input"
            />
            <button onClick={handleApi} className="button">
              {loading ? <span>Signing in..</span> : <span>Sign in</span>}
            </button>
          </div>
        </div>
        <div className="box2">
          <img alt="bg" src={`${process.env.PUBLIC_URL}/images/bg2.png`}></img>
        </div>
      </div>
    </div>
  );
};

export default Login;
