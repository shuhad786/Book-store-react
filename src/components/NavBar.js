import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="Logo">
      Book Store
    </div>
    <ul className="links">
      <NavLink className="link" to="/">Book List</NavLink>
      <NavLink className="link" to="/category">Category</NavLink>
    </ul>
  </nav>
);

export default Navbar;
