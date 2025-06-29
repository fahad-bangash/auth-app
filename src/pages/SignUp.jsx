import React from "react";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl text-center font-semibold my-7">Sign Up</h1>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Username"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="email"
          placeholder="Email"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="bg-slate-100 p-3 rounded-lg"
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95">
          Sign Up
        </button>
        <div className="flex gap-2 mt-5 ">
          <p>Have an account?</p>

          <Link to="/sign-in">
            <span className="text-blue-500">Sign in</span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
