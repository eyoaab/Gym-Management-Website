import { Link,} from "react-router-dom";

import React from 'react';

const SignUpPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-classBg">
      <div className="w-full max-w-sm p-6  bg-darkGray rounded-lg shadow-lg">
        <h2 className="text-3xl font-saira text-center text-white">Sign-Up</h2>
        <form className="mt-6 space-y-4">
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white text-left"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your name"
              required
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white text-left"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-white text-left"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <label
              htmlFor="passwordConfirm"
              className="block text-sm font-medium text-white text-left"
            >
              Confirm Password
            </label>
            <input
              type="password"
              id="passwordConfirm"
              className="w-full px-4 py-2 mt-2 text-gray-900 bg-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Confirm your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-msx px-10 py-2 text-black bg-darkYellow rounded-md focus:outline-none focus:ring-2 "
          >
            Sign-up
          </button>
        </form>
        <p className="mt-6 text-sm text-center text-gray-300">
          Already have an account?{' '}
          <Link
            to="/login"
            className="text-blue-500 hover:underline"
          >
            Login
            </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpPage;
