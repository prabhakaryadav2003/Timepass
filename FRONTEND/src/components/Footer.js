import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto text-center">
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-lg font-medium">Terms of Service</a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-lg font-medium">Privacy Policy</a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-lg font-medium">Contact Us</a>
        </div>
        <div className="flex justify-center space-x-8 mb-8">
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-2xl">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-2xl">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="text-gray-400 hover:text-blue-500 transition duration-300 ease-in-out text-2xl">
            <i className="fab fa-instagram"></i>
          </a>
        </div>
        <div className="text-gray-500 text-sm">
          <p>&copy; 2025 WebsiteName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
