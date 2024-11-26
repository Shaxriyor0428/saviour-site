import React from "react";
import { NAVBAR_LINKS } from "../static";
import logo from "../assets/logo.png"
import logoSg from "../assets/logo_sg.png"
const Header = () => {
  const navbar_links = NAVBAR_LINKS.map((link) => (
    <li key={link.id}>
      <a
        href="#"
        className="text-[18px] font-[400] text-[#1F1534] hover:text-[#1486f8] duration-[.2s] hover:underline"
      >
        <span>{link.name}</span>
      </a>
    </li>
  ));
  return (
    <div className="h-24 mb-20">
      <div className="h-[100%] container max-w-[1300px] mx-auto flex justify-between items-center">
        <div className="logo relative">
          <img
            src={logoSg}
            alt="logosg"
            className="absolute translate-x-[20%] bottom-[5px] max-w-[100%]"
          />
          <img src={logo} alt="Logo" />
        </div>
        <ul className="navbar flex gap-10">{navbar_links}</ul>
      </div>
    </div>
  );
};

export default Header;
