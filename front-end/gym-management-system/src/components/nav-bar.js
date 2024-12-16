import React from "react";

function NavBar() {
  return (
    <nav className="bg-gray-500 bg-opacity-30 y- px-4 py-2 w-min  mt-1 ml-3 rounded-lg">
      <ul className="flex space-x-6">
        <li>
          <a 
            href="/" 
            className="text-white text-xl font-Robot-bold hover:text-yellow-400 px-3 py-2"
            aria-label="Home"
          >
            Home
          </a>
        </li>
        <li>
          <a 
            href="/about" 
            className="text-white text-xl font-Robot-bold hover:text-yellow-400 px-3 py-2"
            aria-label="About"
          >
            About
          </a>
        </li>
        <li>
          <a 
            href="/services" 
            className="text-white text-xl font-Robot-bold hover:text-yellow-400 px-3 py-2"
            aria-label="Services"
          >
            Blog
          </a>
        </li>
        <li>
          <a 
            href="/contact" 
            className="text-white text-xl font-Robot-bold hover:text-yellow-400 px-3 py-2"
            aria-label="Contact"
          >
            Products
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
