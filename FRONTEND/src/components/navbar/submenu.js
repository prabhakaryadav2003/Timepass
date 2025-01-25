import React, { useEffect, useRef } from "react";
import "./navbar.css";
import { NavbarGlobalContext } from "../context/navbarContext";
import { FaChevronRight } from "react-icons/fa";

const Sublinks = () => {
  const { navlink, location, isSubmenuOpen, openSubSubmenu, closeSubSubmenu } =
    NavbarGlobalContext();

  const container = useRef();

  useEffect(() => {
    const submenu = container.current;
    const { top, bottom, left, right } = location;
    submenu.style.top = `${top + 10}px`;
    submenu.style.left = `${left}px`;
  }, [navlink, location]);

  const handleSubmenu = (e) => {
    if (!e.target.classList.contains("sublink_li")) {
      closeSubSubmenu();
    }
  };

  const displaySubSubmenu = (e) => {
    const submenuLabel = e.target.textContent;
    const location = e.target.getBoundingClientRect();
    const top = location.top;
    const bottom = location.bottom;
    const right = location.right;
    const left = location.left;
    openSubSubmenu(submenuLabel, { top, bottom, right, left });
  };
  return (
    <div
      ref={container}
      className={`${isSubmenuOpen ? "show-sublink" : "hide-sublink"}`}
      onMouseOutCapture={handleSubmenu}>
      {navlink.sublinks &&
        navlink.sublinks.map((currentItem, index) => {
          return (
            <div
              className="sublink_li"
              key={index}
              onMouseOver={displaySubSubmenu}>
              {currentItem.label}
              {currentItem.subsubLinks && <FaChevronRight />}
            </div>
          );
        })}
    </div>
  );
};

export default Sublinks;