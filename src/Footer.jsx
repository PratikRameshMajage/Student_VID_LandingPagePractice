import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white px-10 py-5">
      <div className="text-center">
        &copy; {new Date().getFullYear()} Student_VID PRI.LTD. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
