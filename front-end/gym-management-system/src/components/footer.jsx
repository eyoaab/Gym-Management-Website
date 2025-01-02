import React from "react";
import { PiFacebookLogoBold } from "react-icons/pi";
import { CiInstagram } from "react-icons/ci";
import { FaTelegram, FaYoutube, FaPhoneAlt } from "react-icons/fa";

function Footer() {
  return (
    <div className="flex flex-col items-stretch bg-white lg:px-10">
      <footer className="flex flex-col">
        <div className="py-10 px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[3fr,2fr,2fr,2fr]  gap-2 items-start">
          {/* First column */}
          <div className="flex flex-col items-start space-y-4 text-left ">
            <div className="flex items-start space-x-3">
              <img
                src="blackLogo.png "
                alt="CoreFit Club Logo"
                className="w-10 h-10 hidden sm:block"
              />
              <h1 className="font-saira text-2xl md:text-3xl">COREFIT CLUB</h1>
            </div>
            <p className="text-sm text-darkGray w-3/5">
              <span className="font-saira  text-black text-left">
                Address:{" "}
              </span>
              Addis Abeba, Adsisu Gebeya, Belete Mole 2nd floor
            </p>
            <h1 className="font-saira  text-lg">Social Media Links:</h1>
            <div className="flex space-x-4 text-xl">
              <PiFacebookLogoBold
                aria-label="Facebook"
                className="hover:text-blue-600 cursor-pointer"
              />
              <CiInstagram
                aria-label="Instagram"
                className="hover:text-pink-600 cursor-pointer"
              />
              <FaTelegram
                aria-label="Telegram"
                className="hover:text-blue-400 cursor-pointer"
              />
              <FaYoutube
                aria-label="YouTube"
                className="hover:text-red-600 cursor-pointer"
              />
            </div>
          </div>

          {/* Second column */}
          <div className="text-left">
            <h1 className="font-saira  text-lg mb-4">MENU</h1>
            <ul className="space-y-2 text-sm text-darkGray">
              <li className="hover:text-gray-900 cursor-pointer">About</li>
              <li className="hover:text-gray-900 cursor-pointer">Blog</li>
              <li className="hover:text-gray-900 cursor-pointer">Shop</li>
              <li className="hover:text-gray-900 cursor-pointer">Membership</li>
              <li className="hover:text-gray-900 cursor-pointer">Classes</li>
            </ul>
          </div>

          {/* Third column */}
          <div className="text-left">
            <h1 className="font-saira  text-lg mb-4">Useful Links</h1>
            <ul className="space-y-2 text-sm text-darkGray">
              <li className="hover:text-gray-900 cursor-pointer">Login</li>
              <li className="hover:text-gray-900 cursor-pointer">Register</li>
              <li className="hover:text-gray-900 cursor-pointer">Contact Us</li>
              <li className="hover:text-gray-900 cursor-pointer">
                Privacy Policy
              </li>
              <li className="hover:text-gray-900 cursor-pointer">Classes</li>
            </ul>
          </div>

          {/* Fourth column */}
          <div className="text-left">
            <h1 className="font-saira  text-lg mb-4">Working Time</h1>
            <p className="text-sm text-darkGray">
              Everyday: <span className="font-saira ">9:00 - 22:00</span>
            </p>
            <p className="text-sm text-darkGray">
              Sat and Sun: <span className="font-saira ">9:00 - 18:00</span>
            </p>
            <h1 className="font-saira  text-lg mt-6">Contact</h1>
            <div className="flex items-center space-x-2 mt-2">
              <FaPhoneAlt className="text-darkGray" />
              <span className="text-sm text-darkGray">+(251)9-623-224-23</span>
            </div>
          </div>
        </div>
      </footer>
      <div class="border-t border-gray-300 my-3"></div>

      <div className="py-4 text-center text-sm text-darkGray">
        Copyright &copy; {new Date().getFullYear()} Eyob Tariku. All Rights
        Reserved.
      </div>
    </div>
  );
}

export default Footer;
