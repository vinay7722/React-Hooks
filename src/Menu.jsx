import React from "react";
import { NavLink } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu_style">
      <NavLink exact activeClassName="active_class" to="/">
        About us
      </NavLink>
      <NavLink activeClassName="active_class" exact to="/service">
        Service
      </NavLink>
      <NavLink activeClassName="active_class" exact to="/search">
        Search
      </NavLink>
      <NavLink activeClassName="active_class" exact to="/user">
        User
      </NavLink>
      <NavLink activeClassName="active_class" exact to="/contact">
        Contact us
      </NavLink>
    </div>
  );
};

export default Menu;
