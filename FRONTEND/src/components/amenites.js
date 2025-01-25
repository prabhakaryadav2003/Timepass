import {
  FaHamburger,
  FaPizzaSlice,
  FaWifi,
//   TbAirConditioning,
} from "react-icons/fa";

const Amenities = () => {
  return (
    <div className="ameneties border-none flex flex-col justify-center items-center p-6 bg-gray-50 rounded-xl shadow-md">
      <div className="text-2xl font-semibold uppercase text-gray-800 mb-4">
        Amenities
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="m-4">
          <FaHamburger className="text-4xl text-gray-700" />
        </div>
        <div className="m-4">
          <FaPizzaSlice className="text-4xl text-gray-700" />
        </div>
        <div className="m-4">
          <FaWifi className="text-4xl text-gray-700" />
        </div>
        {/* <div className="m-4">
          <TbAirConditioning className="text-4xl text-gray-700" />
        </div> */}
      </div>
    </div>
  );
};

export default Amenities;
