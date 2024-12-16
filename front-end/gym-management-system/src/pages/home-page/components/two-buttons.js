import React from 'react';

function TwoButtons(){
    return (
        <div className='flex jestifay-center flex-row space-x-10 mt-2 ml-10'>
            <button className='bg-yellow-400 text-black py-2 px-10 rounded-lg '>
                Explore More
            </button>
            <button className=' text-white py-2 px-10 rounded-lg  border-yellow-400 border-2 '>
                Join Now
            </button>

        </div>

    );
}

export default TwoButtons;