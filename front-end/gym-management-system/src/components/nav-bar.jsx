import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation(); 

  return (
    <nav className="bg-gray-500 bg-opacity-30 px-4 py-2 w-min mt-1 ml-3 rounded-lg font-saira">
      <ul className="flex space-x-6">
        <li>
          <Link
            to="/"
            className={`text-xl font-Robot-bold px-3 py-2 ${location.pathname === '/' ? 'text-yellow-400' : 'text-white'}`}
            aria-label="Home"
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/about"
            className={`text-xl font-Robot-bold px-3 py-2 ${location.pathname === '/about' ? 'text-yellow-400' : 'text-white'}`}
            aria-label="About"
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to="/blogs"
            className={`text-xl font-Robot-bold px-3 py-2 ${location.pathname === '/blogs' ? 'text-yellow-400' : 'text-white'}`}
            aria-label="Blogs"
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to="/products"
            className={`text-xl font-Robot-bold px-3 py-2 ${location.pathname === '/products' ? 'text-yellow-400' : 'text-white'}`}
            aria-label="Products"
          >
            Products
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
