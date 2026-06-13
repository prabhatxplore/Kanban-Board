import React from "react";
import { useState } from "react";
import axios from "axios";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Is this really working");
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/login",
        {
          email,
          password,
        },
      );
      console.log(response.data);
    } catch (err) {
      console.log(err.response?.data.message);
    }
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-sky-50 px-4">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Login</h1>
          <p className="mt-2 text-sm text-slate-500">Welcome back to your board</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              required
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              type="email"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              name="email"
              id="email"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              required
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
              name="password"
              id="password"
              placeholder="••••••••"
            />
          </div>

          <input
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-semibold text-white transition hover:bg-sky-600 active:scale-[0.99]"
            value="Login"
          />
        </form>
      </div>
    </div>
  );
}

export default Login;
