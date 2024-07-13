import React from "react";
import { Link, Route, Router, Routes } from "react-router-dom";
import Section from "./Landingpage";
import SignUp from "./components/SignUp";

const Navbar = () => {
  return (
    <>
      <nav className="w-full h-[10%] bg-slate-900 px-10 py-5 text-2xl flex justify-between">
        <div className="logo">
          {[{ to: "/", text: "Student VID" }].map((item, index) => (
            <Link key={index} className="" to={item.to}>
              {item.text}
            </Link>
          ))}
        </div>
        <div className="links flex gap-5 ">
          {[
            { to: "/IdCard", text: "Students" },
            { to: "/OpenSource", text: "OpenSource" },
            { to: "/contact", text: "Contact" },
            { to: "/about", text: "About" },
            { to: "/sign_up", text: "Sign up" },
          ].map((item, index) => (
            <Link key={index} className="" to={item.to}>
              {item.text}
            </Link>
          ))}
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Section/>} />
        <Route path="/sign_up" element={<SignUp/>} />
      </Routes>
    </>
  );
};

export default Navbar;