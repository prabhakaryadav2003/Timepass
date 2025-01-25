import React, { useContext, useState } from "react";

import navData from "../navbar/navData";

const NavbarContext = React.createContext();

const NavbarProvider = ({ children }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const [isSubSubmenuOpen, setIsSubSubmenuOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [navlink, setNavlink] = useState({ page: [], links: [], sublinks: [] });
  const [navSubSublink, setNavSubSublink] = useState({
    page: [],
    links: [],
    sublinks: [],
  });
  const [location, setLocation] = useState({
    top: 0,
    right: 0,
    botom: 0,
    left: 0,
  });
  const [sublocation, setSubLocation] = useState({
    top: 0,
    right: 0,
    botom: 0,
    left: 0,
  });

  const openSubmenu = (navlink, location) => {
    console.log(`ye pass kiya hai ${navlink}`);
    const submenuData = navData.find(
      (currentItem) => currentItem.page === navlink.toLowerCase().trim()
    );
    closeSubSubmenu();
    setNavlink(submenuData);
    setLocation(location);
    console.log(submenuData, "yaha tak ayua hu ");
    setIsSubmenuOpen(submenuData.sublinks ? true : false);
  };

  const openSubSubmenu = (subnavlink, sublocation) => {
    if (subnavlink) {
      const subsubmenuData =
        navlink.sublinks &&
        navlink.sublinks.find(
          (currentItem) => currentItem.label === subnavlink.toLowerCase().trim()
        );
      setNavSubSublink(subsubmenuData);
      setSubLocation(sublocation);
      setIsSubSubmenuOpen(subsubmenuData.subsubLinks ? true : false);
    }
  };

  const manageSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
    closeSubmenu();
  };

  const closeSubSubmenu = () => {
    setIsSubSubmenuOpen(false);
  };

  const closeSubmenu = () => {
    setIsSubmenuOpen(false);
    setIsSubSubmenuOpen(false);
  };

  return (
    <NavbarContext.Provider
      value={{
        isSubmenuOpen,
        setIsSubmenuOpen,
        navlink,
        setNavlink,
        location,
        setLocation,
        openSubmenu,
        closeSubmenu,
        openSubSubmenu,
        closeSubSubmenu,
        isSubSubmenuOpen,
        navSubSublink,
        sublocation,
        manageSideBar,
        isSidebarOpen,
      }}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarGlobalContext = () => {
  const context = useContext(NavbarContext);
  if (!context) {
    throw new Error("useNavbar must be used within a NavbarProvider");
  }
  return context;
};

export { NavbarProvider, NavbarContext };