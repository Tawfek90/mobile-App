import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";
import { AiFillApple } from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { BsFillPersonFill } from "react-icons/bs";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaBars } from "react-icons/fa";

export default function Navbar() {
  const [clicked, setClicked] = useState(false);

  return (
    <div className="nav">
      <div className="nav-container">
        <Link to="/">
          <div className="logo">
            <AiFillApple className="logoIcon" />
            <p>premium reseller</p>
          </div>
        </Link>

        <ul className={`navCategories ${clicked && "show-list"}`}>
          <li className="navCategoryItem">mac</li>
          <li className="navCategoryItem">ipad</li>
          <li className="navCategoryItem">iphone</li>
          <li className="navCategoryItem">watch</li>
          <li className="navCategoryItem">tv</li>
          <li className="navCategoryItem">accessories</li>
          <li className="navCategoryItem">offers</li>
          <div className="seperate"></div>
          <li className="navCategoryItem">support</li>
          <li className="navCategoryItem">services</li>
          <li className="navCategoryItem">location</li>
        </ul>

        <div className="navIcons">
          <div className="navIconItem">
            <FiSearch />
          </div>
          <div className="navIconItem">
            <BsFillPersonFill />
          </div>
          <div className="navIconItem">
            <RiLockPasswordFill />
          </div>
        </div>
        <div className="bars" onClick={() => setClicked(!clicked)}>
          <FaBars />
        </div>
      </div>
    </div>
  );
}
