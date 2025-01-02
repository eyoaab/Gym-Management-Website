import React from "react";

function ContactPage() {
  return (
    <div className="md:px-20  py-20 px-2  bg-classBg w-full overflow-clip ">
      <div className="flex flex-col md:flex-row justify-between items-center  space-x-10 w-full">
        {/* Heading */}
        <h1 className="font-saira text-white text-5xl md:text-5xl lg:text-6xl text-center md:text-left xsm:hidden mb-5 ">
          NEWSLETTER
        </h1>

        {/* Column Section */}
        <div className="flex flex-col space-y-6 items-start w-full ">
          <p className="font-saira text-lg text-gray-300 text-left">
            Sign up for our newsletter to receive the latest news and updates.
          </p>

          {/* Newsletter Subscription Form */}
          <div className="flex p-1  flex-row items-center justify-evenly bg-darkGray opacity-90 md:px-2 md:py-2 rounded-md ">
            <input
              type="email"
              placeholder="Enter your email..."
              className="bg-transparent text-gray-300 placeholder-gray-400 border-none w-4/5  outline-none "
            />
            <button
              type="submit"
              className="md:px-4 px-1 py-1 bg-darkYellow text-black font-semibold rounded-md"
            >
              Subscribe
            </button>
          </div>

          {/* Privacy Disclaimer */}
          <p className="text-sm text-gray-400 w-3/4 text-start">
            We respect your privacy. Your information will never be shared with
            anyone.
          </p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
