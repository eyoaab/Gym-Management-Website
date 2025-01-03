import React from "react";
import { FaRegHourglass } from "react-icons/fa";
import { motion } from "framer-motion";
import Header from "../../components/header";

function ProductPage() {
  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gradient-to-r from-darkGray to-darkYellow text-center  pt-0">
      {/* Header Component */}
      <Header />

      {/* Main Heading with Animation */}
      <motion.h1
        className="text-5xl font-saira text-white my-10"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Products Page
      </motion.h1>

      {/* Hourglass Icon with Animation */}
      <motion.div
        className="text-8xl text-yellow-400 mb-6"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <FaRegHourglass className="text-darkGray" />
      </motion.div>

      {/* Sub Heading with Animation */}
      <motion.h2
        className="text-3xl font-saira text-white mb-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        Coming Soon...
      </motion.h2>

      {/* Description Text with Animation */}
      <motion.p
        className="text-xl font-saira text-white mt-4 max-w-lg mx-auto px-4 md:px-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Stay tuned! Our products are on their way, and we can’t wait to share
        them with you.
      </motion.p>

      {/* Actionable Button with Hover Effect */}
      <motion.div
        className="mt-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <button className="bg-darkGray m text-white px-6 py-3 rounded-xl text-lg font-semibold">
          Notify Me
        </button>
      </motion.div>
    </div>
  );
}

export default ProductPage;
