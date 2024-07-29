import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center mt-28">
        <div className="w-96 border rounded bg-white px-7 py-10">
          <form
            onSubmit={(e) => {
              e.preventDefault();
            }}
          >
            <h4 className="text-2xl mb-7">Login</h4>

            <input type="text" placeholder="Email" className="input-box mb-4" />

            <input
              type="password"
              placeholder="Password"
              className="input-box mb-4"
            />

            <button type="submit" className="btn-primary">
              Login
            </button>

            <p className="text-sm text-center mt-4">
              Not registered yet?{" "}
              <Link to="/signup" className="font-medium text-primary underline">
                Sign Up
              </Link>
            </p>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
