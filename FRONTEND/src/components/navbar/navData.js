import {
    FaHome,
    FaHeart,
    FaSignInAlt,
    FaUserPlus,
    FaEnvelope,
    FaUser,
  } from "react-icons/fa";
  import React from "react";
  
  const navData = [
    {
      page: "home",
      links: [{ label: "home", icon: <FaHome />, url: "/" }],
    },
    
    {
      page: "contact us",
      links: [
        {
          label: "contact us",
          icon: <FaEnvelope />,
          url: "/contact-us",
        },
      ],
    },
    {
      page: "wishlist",
      links: [
        {
          label: "wishlist",
          icon: <FaHeart />,
          url: "/wishlist",
        },
      ],
    },
  scrollbars
    {
      page: "user",
      links: [{ label: "user account", icon: <FaHome /> }],
      sublinks: [
        {
          label: "login",
          icon: <FaSignInAlt />,
          url: "/user/login",
        },
        {
          label: "register",
          icon: <FaUserPlus />,
          url: "/user/register",
        },
        {
          label: "profile",
          icon: <FaUser />,
          url: "/user/register",
        
        },
      ],
    },
  ];
  
  export default navData;