import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import Switcher from "./Switcher";
import { useTranslation } from 'react-i18next';
import LangSwitcher from "./LangSwitcher";

const Navbar = () => {
  const { t } = useTranslation();
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  const menuLink = (section, label) => (
    <li>
      <Link to={section} smooth={true}>
        {t(label)}
      </Link>
    </li>
  );

  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4">
      <div>
        <Link to="home" smooth={true} duration={Navbar.menuLink.duration}>
          <img
            className="w-20 h-20 cursor-pointer"
            src={Logo}
            alt="logo"
          />
        </Link>
      </div>

      {/* menu */}
      <ul className="hidden md:flex items-center">
        {menuLink("home", "Home")}
        {menuLink("about", "About")}
        {menuLink("skills", "Skills")}
        {menuLink("work", "Work")}
        {menuLink("contact", "Contact")}
        <li className="flex">
          <Switcher />
          <LangSwitcher />
        </li>
      </ul>

      {/* Hamburger menu */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile Menu */}
      {nav && (
        <div className="backdrop-blur-3xl fixed top-0 left-0 w-full h-screen flex flex-col justify-center items-center">
          <ul>
            {menuLink("home", "Home")}
            {menuLink("about", "About")}
            {menuLink("skills", "Skills")}
            {menuLink("work", "Work")}
            {menuLink("contact", "Contact")}
            <li>
              <Switcher />
            </li>
            <li>
              <LangSwitcher />
            </li>
          </ul>
        </div>
      )}

      {/* Social Icons */}
      <div className="hidden md:flex fixed flex-col top-[15%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              href="https://www.linkedin.com/in/manai-khalil/"
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              href="https://github.com/khalilmanai"
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              href="mailto:medkhalilmannai@gmail.com"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[10px] duration-300">
            <a
              className="flex justify-between items-center w-full"
              target="_blank"
              rel="noopener noreferrer"
              referrerPolicy="no-referrer"
              href="https://drive.google.com/drive/folders/1ZYqnuPIC9UMKr-mML4YpXZ-d9oN4K0YF?usp=sharing"
            >
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>

    </div>
  );
};

// Constants
Navbar.menuLink = {
  duration: 500,
  logoWidth: "120px",
};

export default Navbar;
