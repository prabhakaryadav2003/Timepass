import React, { useState } from "react";

function PaymentDetails() {
  const [fullName, setFullName] = useState("");
  const [accountNumber, setAccountNumber] = useState("");
  const [ifscCode, setIfscCode] = useState("");
  const [bankName, setBankName] = useState("");
  const [branchName, setBranchName] = useState("");
  const [upiId, setUpiId] = useState("");
  const [qrCode, setQrCode] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");

    // Validate fields
    if (
      !fullName ||
      !accountNumber ||
      !ifscCode ||
      !bankName ||
      !branchName ||
      !upiId ||
      !qrCode
    ) {
      setError("Please fill in all fields");
      return;
    }

    // Mock API call or processing
    console.log({
      fullName,
      accountNumber,
      ifscCode,
      bankName,
      branchName,
      upiId,
      qrCode,
    });
  };

  return (
    <div className="flex justify-center items-center bg-gray-100 pt-24">
      <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-6">
        <h2 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Payment Details
        </h2>
        <form onSubmit={handleSubmit}>
          {/* Bank Details */}
          <h3 className="text-xl font-bold text-gray-700 mb-4">
            Bank Details
          </h3>
          <div className="mb-4">
            <label
              htmlFor="fullName"
              className="block text-gray-700 font-bold mb-2"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="accountNumber"
              className="block text-gray-700 font-bold mb-2"
            >
              Account Number
            </label>
            <input
              type="text"
              id="accountNumber"
              value={accountNumber}
              onChange={(e) => setAccountNumber(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="ifscCode"
              className="block text-gray-700 font-bold mb-2"
            >
              IFSC Code
            </label>
            <input
              type="text"
              id="ifscCode"
              value={ifscCode}
              onChange={(e) => setIfscCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="bankName"
              className="block text-gray-700 font-bold mb-2"
            >
              Bank Name
            </label>
            <input
              type="text"
              id="bankName"
              value={bankName}
              onChange={(e) => setBankName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="branchName"
              className="block text-gray-700 font-bold mb-2"
            >
              Branch Name
            </label>
            <input
              type="text"
              id="branchName"
              value={branchName}
              onChange={(e) => setBranchName(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* UPI Details */}
          <h3 className="text-xl font-semibold text-gray-700 mb-4">
            UPI Details
          </h3>
          <div className="mb-4">
            <label
              htmlFor="upiId"
              className="block text-gray-700 font-bold mb-2"
            >
              UPI ID
            </label>
            <input
              type="text"
              id="upiId"
              value={upiId}
              onChange={(e) => setUpiId(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="qrCode"
              className="block text-gray-700 font-bold mb-2"
            >
              QR Code
            </label>
            <input
              type="text"
              id="qrCode"
              value={qrCode}
              onChange={(e) => setQrCode(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          {/* Error Message */}
          {error && <div className="mb-4 text-red-600 text-sm">{error}</div>}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition duration-300"
          >
            Save Payment Details
          </button>
        </form>
      </div>
    </div>
  );
}

export default PaymentDetails;
