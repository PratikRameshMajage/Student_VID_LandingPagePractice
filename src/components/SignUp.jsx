import React from "react";

const SignUp = () => {
  return (
    <>
      <div className="w-full h-[80%] px-20 py-10 flex justify-center items-center">
        <div className="w-64 h-64 bg-zinc-500 rounded-md p-8 ">
          <div className="head rounded-md p-1 text-xl text-center font-semibold mb-1 bg-zinc-950">
            <h2>Sign Up</h2>
          </div>
          <div className="form">
            <form action="">
              <label for="username">Username:</label>
              <input
                className="rounded-md mt-1 p-1 text-zinc-950 "
                type="text"
                id="username"
                name="username"
                required
              />
              <label for="username">Username:</label>
              <input
                className="rounded-md mt-1 p-1  "
                type="text"
                id="username"
                name="username"
                required
              />
              <div className="flex justify-between">
                <button
                  className="button px-3 py-2 bg-zinc-950 rounded-md text-sm font-semibold mt-3"
                  type="submit"
                >
                  Sign Up
                </button>
                <button
                  className="button px-3 py-2 bg-zinc-950 rounded-md text-sm font-semibold mt-3"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default SignUp;