import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header style={{ background: "#333", padding: "10px 20px", color: "#fff" }}>
      <h1>My Portfolio</h1>
      <nav>
        <ul style={{ display: "flex", gap: "20px" }}>
          <li><Link to="about" smooth={true} duration={500}>About</Link></li>
          <li><Link to="projects" smooth={true} duration={500}>Projects</Link></li>
          <li><Link to="skills" smooth={true} duration={500}>Skills</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
