import React from "react";
import { Link } from "react-router-dom";
import CustomLink from "../CustomeLink/CustomeLink";
import "./Header.css";
const Header = () => {
  return (
    <div className=" header">
      <div>Crypto</div>
      <div className="secondHeader">
        <CustomLink className="all" to={"/"}>
          Home
        </CustomLink>
        <CustomLink className="all" to={"/about"}>
          About
        </CustomLink>
        <CustomLink className="all" to={"/contact"}>
          Contact
        </CustomLink>
        <CustomLink className="all" to={"/phone"}>
          Phone
        </CustomLink>
      </div>
    </div>
  );
};

export default Header;
