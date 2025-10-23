import React from "react";
import { NavLink } from "react-router";

const MyLink = ({ to, children }) => {
  return (
    
    <NavLink
                  to={to}
                  className={({ isActive }) =>
                    `px-3 font-semibold transition-colors duration-200 ${
                      isActive ? "text-green-700 border-b-2 border-green-700" : "hover:text-green-600"
                    }`
                  }
                >
                  {children}
                </NavLink>
  );
};

export default MyLink;