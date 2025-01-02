import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
  const location = useLocation();

  return (
    <nav className="bg-gray-500 bg-opacity-30 py-2 w-auto sm:w-auto mt-1 ml-3 rounded-lg font-saira">
      <ul className="flex justify-start sm:justify-center sm:items-start space-x-0 sm:space-x-6">
        {[
          { path: "/", label: "Home" },
          { path: "/about", label: "About" },
          { path: "/blogs", label: "Blog" },
          { path: "/products", label: "Products" },
        ].map((item) => (
          <li key={item.path}>
            <Link
              to={item.path}
              className={`text-base sm:text-lg md:text-xl font-roboto-bold px-3 py-2 ${
                location.pathname === item.path
                  ? "text-yellow-400"
                  : "text-white"
              }`}
              aria-label={item.label}
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default NavBar;
