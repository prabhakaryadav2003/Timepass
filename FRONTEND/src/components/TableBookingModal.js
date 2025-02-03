import React, { useState } from "react";
import { motion } from "framer-motion";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const TableBookingModal = ({ isOpen, onClose, title = "Book a Table", tableTypes = [{ type: "2-seat", chairs: 2 }, { type: "4-seat", chairs: 4 }, { type: "6-seat", chairs: 6 }] }) => {
  const [selectedTables, setSelectedTables] = useState([]);
  const [selectedDateTime, setSelectedDateTime] = useState(new Date());

  const handleTableSelect = (table) => {
    setSelectedTables((prev) =>
      prev.includes(table)
        ? prev.filter((t) => t !== table)
        : [...prev, table]
    );
  };

  const handleBooking = () => {
    if (selectedTables.length > 0 && selectedDateTime) {
      alert(`Tables ${selectedTables.join(", ")} booked for ${selectedDateTime}`);
      onClose();
    } else {
      alert("Please select at least one table, date, and time.");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="bg-white rounded-lg shadow-lg w-11/12 max-w-3xl p-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>

        <div className="grid grid-cols-6 gap-6 mb-6 justify-center items-center">
          {tableTypes.map((tableType, index) => (
            Array.from({ length: 5 }, (_, i) => i + 1).map((table) => (
              <button
                key={`${tableType.type}-${table}`}
                onClick={() => handleTableSelect(`${tableType.type} ${table}`)}
                className={`relative p-4 rounded-lg border text-sm font-bold shadow-md flex flex-col items-center justify-center space-y-2 ${
                  selectedTables.includes(`${tableType.type} ${table}`)
                    ? "bg-green-500 text-white border-green-700 scale-105"
                    : "bg-gray-100 text-gray-800 hover:bg-green-400 hover:text-white"
                } transition-all duration-300`}
              >
                <div className="flex space-x-1">
                  {Array.from({ length: tableType.chairs }).map((_, chairIndex) => (
                    <span key={chairIndex} className="text-xl">|</span>
                  ))}
                </div>
                <span className="text-sm">Table {table}</span>
              </button>
            ))
          ))}
        </div>

        <div className="mb-6">
          <label htmlFor="datetime" className="block text-gray-700 font-medium mb-2">
            Select Date and Time:
          </label>
          <DatePicker
            id="datetime"
            selected={selectedDateTime}
            onChange={(date) => setSelectedDateTime(date)}
            showTimeSelect
            dateFormat="MMMM d, yyyy h:mm aa"
            className="w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex justify-end space-x-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400"
          >
            Cancel
          </button>
          <button
            onClick={handleBooking}
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600"
          >
            Confirm Booking
          </button>
        </div>
      </motion.div>
    </div>
  );
};

export default TableBookingModal;
