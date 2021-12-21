import React from "react";
import { NavLink } from "react-router-dom";

import google from "../../assets/images/logo.png";

const Navigation: React.FC = () => {
  return (
    <nav>
      <div className="navbar">
        <NavLink to="/">
          <img src={google} alt="Google Logo" />
        </NavLink>
        <ul className="nav-links">
          <li>
            <NavLink to="/todos">список дел</NavLink>
          </li>
          <li>
            <NavLink to="/users">пользователи</NavLink>
          </li>
          <li>
            <NavLink to="/about">о нас</NavLink>
          </li>
          <li>
            <NavLink to="/charts">Charts</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
