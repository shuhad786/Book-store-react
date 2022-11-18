import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <nav className="navBar">
    <div className="Logo">
      Book Store CMS
    </div>
    <ul className="links">
      <NavLink className="link" to="/">Books</NavLink>
      <NavLink className="link" to="/category">Category</NavLink>
    </ul>
  </nav>
);

export default Navbar;
