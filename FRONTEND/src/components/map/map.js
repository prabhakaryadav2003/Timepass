import React from "react";

const Map = () => {
  return (
    <div className="w-full flex justify-center items-center mt-[1rem]">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235.82329101517823!2d72.80959218528871!3d18.96798079867138!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce740c73d241%3A0x2f342887d5ce589f!2sAntilia%2C%20ANTILIA%20APARTMENT%2C%20SK%20Barodawala%20Marg%2C%20Tardeo%2C%20Mumbai%2C%20Maharashtra%20400026!5e0!3m2!1sen!2sin!4v1737830679251!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: "0" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
        className="rounded-lg shadow-md"
      ></iframe>
    </div>
  );
};

export default Map;
