import React from "react";
import "./navbar.css";
import { NavbarGlobalContext } from "./context";
import navData from "./navData";
import { FaCaretDown } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { FaRegUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { openSubmenu, closeSubmenu, isSidebarOpen, manageSideBar } =
    NavbarGlobalContext();

  const displaySubmenu = (e, text) => {
    const page = text || e.target.textContent;
    const location = e.target.getBoundingClientRect();
    const top = location.top;
    const bottom = text ? location.bottom - 100 : location.bottom;
    const right = text ? location.right - 200 : location.right;
    const left = text ? location.left - 300 : location.left;
    openSubmenu(page, { top, bottom, right, left });
  };

  const handleCloseSubmenu = (e) => {
    if (!e.target.classList.contains("nav-link")) {
      closeSubmenu();
    }
  };

  return (
    <>
      <nav
        className="navbar manage-nav-pc-show"
        onMouseOver={handleCloseSubmenu}>
        <ul className="nav-list">
          {navData.map((currentItem, index) => {
            const { page, links } = currentItem;
            return (
              <li className="nav-item" key={index}>
                {links.icon}
                {links.url ? (
                  <a
                    href={links.url}
                    className="nav-link"
                    onMouseOver={displaySubmenu}>
                    {page}
                  </a>
                ) : (
                  <div className="nav-link" onMouseOver={displaySubmenu}>
                    {page}
                  </div>
                )}
                <div className="icon_container">
                  {currentItem.sublinks && <FaCaretDown />}
                </div>
              </li>
            );
          })}
          <SearchInput />
        </ul>
      </nav>

      <nav className="navbar manage-nav-phone-show flex flex-row justify-between min-w-[98vw] items-center z-10">
        <div className="show-button  text-2xl" onClick={() => manageSideBar()}>
          <FiAlignJustify />
        </div>
        <div className="max-w-[70%]">
          <SearchInput />
        </div>
        <div
          className="user-account capitalize font-bold text-3xl flex flex-col justify-center items-center"
          onClick={(e) => displaySubmenu(e, "user")}>
          <FaRegUserCircle />
          <div className="text-lg">
            <FaCaretDown />
          </div>
        </div>

        <ul
          className={`phone-navbar border border-black absolute top-[5rem] left-0 z-50 max-w-[30vw] ${
            isSidebarOpen ? "open-sidebar" : "close-sidebar"
          }`}>
          {navData.slice(0, -1).map((currentItem, index) => {
            const { page, links } = currentItem;
            return (
              <li className="nav-item" key={index}>
                {links.icon}
                {links.url ? (
                  <a
                    href={links.url}
                    className="nav-link"
                    onClick={(e) => displaySubmenu(e)}>
                    {page}
                  </a>
                ) : (
                  <div className="nav-link" onClick={(e) => displaySubmenu(e)}>
                    {page}
                  </div>
                )}
                <div className="icon_container">
                  {currentItem.sublinks && <FaCaretDown />}
                </div>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
};

export default Navbar;