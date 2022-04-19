import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  let links = [
    { name: "Home", url: "/" },
    { name: "Movies", url: "/movies" },
    { name: "Directors", url: "/directors" },
    { name: "Actors", url: "/actors" }
  ]

  const navLinkFactory = () => {
    return links.map(link => {
      return (
        <li key={link.url}>
          <NavLink to={link.url}>{link.name}</NavLink>
        </li>
      )
    })
  }

  return (
    <div className="navbar">
      <ul>
        {navLinkFactory()}
      </ul>
    </div>);
}

export default NavBar;