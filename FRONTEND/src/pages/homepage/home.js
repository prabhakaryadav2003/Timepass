import React from "react";
import Navbar from "../../components/navbar/navbar";
import { NavbarProvider } from "../../components/navbar/context";

// import BgVideo from '../../assets/video/BgVideo'
const Home = () => {
  return (
    <div className=" border ">
      <NavbarProvider>
        <Navbar />
      </NavbarProvider>
    </div>
  );
};

export default Home;
