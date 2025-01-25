import {
  FaLeaf,
  FaDrumstickBite,
  FaWifi,
  FaSnowflake,
} from "react-icons/fa";

const Amenities = () => {
  return (
    <div className="ameneties border-none flex flex-col justify-center items-center p-6 bg-gray-50 rounded-xl shadow-md">
      <div className="text-2xl font-semibold uppercase text-gray-800 mb-4">
        Amenities
      </div>
      <div className="flex flex-row justify-center items-center">
        <div className="m-4 flex flex-col items-center">
          <FaLeaf className="text-4xl text-gray-700" />
          <p className="text-sm mt-2 text-gray-600">Pure Veg</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaDrumstickBite className="text-4xl text-gray-700" />
          <p className="text-sm mt-2 text-gray-600">Non Veg</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaSnowflake className="text-4xl text-gray-700" />
          <p className="text-sm mt-2 text-gray-600">AC</p>
        </div>
        <div className="m-4 flex flex-col items-center">
          <FaWifi className="text-4xl text-gray-700" />
          <p className="text-sm mt-2 text-gray-600">WiFi</p>
        </div>
      </div>
    </div>
  );
};

export default Amenities;
