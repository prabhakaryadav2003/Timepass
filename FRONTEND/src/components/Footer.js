import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto text-center space-y-4">
        <div className="flex justify-center space-x-6">
          <a href="#" className="hover:text-blue-400 transition duration-300">Terms of Service</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Privacy Policy</a>
          <a href="#" className="hover:text-blue-400 transition duration-300">Contact Us</a>
        </div>

        <div className="mt-6">
          <a href="#" className="mx-4 hover:text-blue-400 transition duration-300">Facebook</a>
          <a href="#" className="mx-4 hover:text-blue-400 transition duration-300">Twitter</a>
          <a href="#" className="mx-4 hover:text-blue-400 transition duration-300">Instagram</a>
        </div>

        <div className="mt-6 text-gray-400 text-sm">
          <p>&copy; 2025 WebsiteName. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
