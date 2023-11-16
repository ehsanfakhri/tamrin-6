import React, { useState } from "react";
import HomePage from "./HomePage";
import AboutPage from "./AboutPage";
import UsersPage from "./components/UserPage";

const App = () => {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <button onClick={() => handleNavigation("home")}>Home</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("about")}>About</button>
          </li>
          <li>
            <button onClick={() => handleNavigation("users")}>Users</button>
          </li>
        </ul>
      </nav>
      {currentPage === "home" && <HomePage />}
      {currentPage === "about" && <AboutPage />}
      {currentPage === "users" && <UsersPage />}
    </div>
  );
};

export default App;
