import React from "react";
import { navItems } from "./data";

const Navbar: React.FC = () => {
  return (
    <header className="navbar">
      <div className="brand">Your Name</div>
      <nav>
        <ul>
          {navItems.map(item => (
            <li key={item.id}>
              <a href={item.href}>{item.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
