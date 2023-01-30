import React from "react";
import Logo from "../../assets/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container mx-auto">
        <div className="flex justify-around">
          <div>
            <img src={Logo} alt="" />
          </div>
          <div>
            <h2>Doormat Nav igation</h2>
            <ul className="list-none text-left">
              <li>Home</li>
              <li> About </li>
              <li>menu</li>
              <li>Reservations</li>
              <li>Order</li>
              <li>Online </li>
              <li>Login</li>
            </ul>
          </div>
          <div>
            <h2>Contact</h2>
            <ul className="list-none text-left">
              <li>Adress</li>
              <li> phone number </li>
              <li>email</li>
            </ul>
          </div>
          <div>
            <h2>Social M edia Links</h2>
            <ul className="list-none text-left">
              <li>Adress</li>
              <li> phone number </li>
              <li>email</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
