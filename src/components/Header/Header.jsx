import React from "react";
import style from "./Header.css";
import Logo from "../../assets/Logo.svg";

const Header = () => {
  return (
    <header className="container flex mx-auto justify-evenly align-middle py-5 ">
      <div>
        <img src={Logo} alt="" />
      </div>
      <nav className="inline-block">
        <ul className="flex gap-4 text-lg">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
