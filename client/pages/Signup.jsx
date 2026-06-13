import React from "react";

function Signup() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-100 via-white to-sky-50 px-4 py-6">
      <div className="w-full max-w-md rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_20px_60px_rgba(15,23,42,0.12)]">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-slate-900">Create Account</h1>
          <p className="mt-2 text-sm text-slate-500">Use your name, email, and password</p>
        </div>

        <form className="space-y-5">
          <div>
            <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              placeholder="Your name"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            />
          </div>

          <div>
            <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              placeholder="you@example.com"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              placeholder="Create a password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="mb-2 block text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              required
              placeholder="Confirm your password"
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-sky-400 focus:ring-2 focus:ring-sky-400/20"
            />
          </div>

          <button
            type="submit"
            className="w-full rounded-2xl bg-sky-500 px-4 py-3 font-semibold text-white transition hover:bg-sky-600 active:scale-[0.99]"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}

export default Signup;
