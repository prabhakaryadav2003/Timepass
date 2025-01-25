const Address = ({ shopNumber, floorTower, area, city, landmark }) => {
  return (
    <div className="p-4 bg-gray-50 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Address</h2>
      <ul className="text-gray-700 space-y-2">
        <li>
          <span className="font-medium">Shop Number:</span> {shopNumber}
        </li>
        <li>
          <span className="font-medium">Floor Tower:</span> {floorTower}
        </li>
        <li>
          <span className="font-medium">Area:</span> {area}
        </li>
        <li>
          <span className="font-medium">City:</span> {city}
        </li>
        <li>
          <span className="font-medium">Near Landmark:</span> {landmark}
        </li>
      </ul>
    </div>
  );
};
export default Address;
