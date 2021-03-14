import React from "react";
import { Link } from "react-router-dom";
import { Nav } from "./Navbar.styles";

const Navbar: React.FC = () => {
  return (
    <Nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </Nav>
  );
};

export default Navbar;
