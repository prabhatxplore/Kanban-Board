import React from "react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await axios.post("http://localhost:3000/api/auth/login");

    
  };
  return (
    <div className="h-screen flex justify-center items-center flex-col">
      <div className="mb-6 font-bold text-3xl">Login Form</div>
      <div className=" flex border items-center  border-black px-4 py-2 rounded-[4px] relative">
        <form onSubmit={handleSubmit}>
          <label className="" htmlFor="email">
            Email
          </label>
          <input
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            type="email"
            className="outline-none m-1"
            name="email"
            id="email"
          />
          <label htmlFor="password"> Password</label>
          <input
            required
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            className="outline-none m-1"
            name="password"
            id="password"
          />
          <input
            type="submit"
            className="bg-lime-400 p-2 px-3 rounded-[6px]  absolute bottom-1 right-[-5rem]"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
