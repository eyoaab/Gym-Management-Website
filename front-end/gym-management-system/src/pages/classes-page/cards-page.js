import React from 'react';
import ShowCards from './components/show-cards';
import { FaArrowRight } from "react-icons/fa";


function ClassesPage(){
    return (
        <div className='flex-col justify-between  bg-classBg px-10 pb-6 pt-5'>
            <h1 className='text-center font-saira text-5xl text-white'>
             OUR CLASSES    
            </h1>
            {/* classes page */}
            <ShowCards />
            {/* explore buttons part */}

            <div className="inline-flex items-center justify-start bg-darkYellow text-black py-2 px-4 rounded-xl w-fit">
            <span className="font-medium">ALL CLASSES</span>
            <div className="bg-white rounded-lg w-7 h-7 flex justify-center items-center ml-2">
             <FaArrowRight />
        </div>
          </div>

        </div>

    );
}
export default ClassesPage