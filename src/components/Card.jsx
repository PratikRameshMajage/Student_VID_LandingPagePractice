import React from "react";
const Card = () => {
  return (
    <>
      <div className="w- full h-full flex justify-center items-center">
        <div className="w-64 h-96 bg-slate-500 rounded-md bg-gradient-to-r from-zinc-700 to-zinc-900 shadow-2xl">
          <div className="w-full h-full flex flex-col justify-center items-center gap-8 text-center">
            <div className="w-36 h-36 bg-black rounded-full border-none overflow-hidden">
              <img
                className=""
                src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Profile"
              />
            </div>
            <h1 className="text-xl text-zinc-100">Sweety Jha</h1>
            <h2>CLass : 12th</h2>
            <h2>Address : Pune. Maharshtra</h2>
          </div>
        </div>
      </div>
    </>
  );
};
export default Card;