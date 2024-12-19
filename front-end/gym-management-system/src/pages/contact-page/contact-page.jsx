import React from 'react';

function ContactPage() {
    return (
        <div className="px-20 py-20 bg-classBg ">
            <div className="flex flex-row justify-between">
                {/* Heading */}
                <h1 className="font-saira text-white text-4xl lg:text-6xl text-left xsm:hidden">
                    NEWSLETTER
                </h1>

                {/* Column Section */} 
                <div className="flex flex-col space-y-6 items-start w-2/4">
                    <p className="font-saira text-[25px] lg:text-[25px] text-gray-300 text-left w-4/5">
                        Sign up for our newsletter to receive the latest news and updates.
                    </p>

                    {/* Newsletter Subscription Form */}
                    <div className="flex flex-row items-center bg-darkGray opacity-90 px-2 py-2 w-3/4 rounded-md ">
                        <input
                            type="email"
                            placeholder="Enter your email..."
                            className="flex-1 bg-transparent text-gray-300 placeholder-gray-400 border-none outline-none"
                        />
                        <button
                            type="submit"
                            className="px-4 py-1 bg-darkYellow text-black font-semibold rounded-md"
                        >
                            Subscribe
                        </button>
                    </div>

                    {/* Privacy Disclaimer */}
                    <p className="text-sm text-gray-400 w-3/4 text-start">
                        We respect your privacy. Your information will never be shared with anyone.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;
