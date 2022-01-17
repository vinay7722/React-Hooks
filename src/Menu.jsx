import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <>
      <NavLink exact activeClassName="active_class" to="/">
        About us
      </NavLink>
      <NavLink exact to="/service">
        Service
      </NavLink>
      <NavLink exact to="/user">
        User
      </NavLink>
      <NavLink exact to="/contact">
        Contact us
      </NavLink>
    </>
  );
};

export default Menu;
