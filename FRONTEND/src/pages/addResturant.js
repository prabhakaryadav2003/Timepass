import React from "react";
import RestaurantInformation from "../components/RestaurantInformation";
import RestaurantLocationDetails from "../components/RestaurantLocationDetails";
import MenuDetails from "../components/MenuDetails";
import TableDetails from "../components/TableDetails";
import PaymentDetails from "../components/PaymentDetails";

import Navbar from "../components/NavBar";

const AddResturant = () => {
  return (
    <div  className="flex flex-col border border-black h-full w-full p-0">
      <Navbar/>
      <RestaurantInformation />
      <RestaurantLocationDetails />
      <MenuDetails />
      <TableDetails/>
      <PaymentDetails/>
    </div>
  );
};

export default AddResturant;
