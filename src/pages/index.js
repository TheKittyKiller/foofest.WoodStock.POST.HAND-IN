import React from 'react';

const HomePage = () => {
  return (
    <div className="flex">
      <div className="w-16 bg-gray-900 text-white">
     
      <div className="fixed right-0 top-0 h-full w-16  text-white">
      <ul className="flex flex-col justify-center h-full">
        <li className="py-4 px-2 cursor-pointer hover:bg-gray-700">
          HOME
          <div className="w-full h-px bg-pink-500 mt-2"></div>
        </li>
        <li className="py-4 px-2 cursor-pointer hover:bg-gray-700">
          VIP
          <div className="w-full h-px bg-pink-500 mt-2"></div>
        </li>
        <li className="py-4 px-2 cursor-pointer hover:bg-gray-700">
          NEWS
          <div className="w-full h-px bg-pink-500 mt-2"></div>
        </li>
        <li className="py-4 px-2 cursor-pointer hover:bg-gray-700">
          INFO
          <div className="w-full h-px bg-pink-500 mt-2"></div>
        </li>
      </ul>
    </div>

      </div>
      <div className="flex flex-col justify-start items-start flex-grow px-8 py-4 ">
        <div className="w-3/4 h-3/4">
          <img src="/1.jpeg" alt="Logo" className="w-full h-full object-contain" />
        </div>
        <h3 className="text-pink-500 mt-4 text-left">Hello</h3>
        <p className="text-white text-left mt-6">
          We've got a few options for bookings so why not let us help you find the right one for you.
          Start the process below, we promise it's not a horrible experience.
        </p>
        <button className="bg-teal-300 text-black py-2 px-4 rounded mt-6">
          Find Ticket
        </button>
      </div>
    </div>
  );
};

export default HomePage;

    
    
    
    
    
    
    


