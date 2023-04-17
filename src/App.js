import "./App.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AuthViews from "./Views/auth-views";
import AppViews from "./Views/app-views";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    // Login Page Statement
    const token = localStorage.getItem("auth_token");
    setIsLoggedIn(token == null ? false : true);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="*"
            element={
              // Token'ı çekerse AppViews'a atıcak, token null gelirse AuthViews'a atıcak.
              isLoggedIn ? (
                <AppViews setIsLoggedIn={setIsLoggedIn} />
              ) : (
                <AuthViews setIsLoggedIn={setIsLoggedIn} />
              )
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
