import React from "react";

const CardSkeleton = () => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 h-auto md:h-40 bg-white flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 rounded-md shadow-md cursor-pointer hover:shadow-lg mb-8 animate-pulse">
      <div className="flex justify-center items-center flex-col md:flex-row w-full md:w-1/3">
        <div className="flex justify-center items-center mr-0 md:mr-8 mb-4 md:mb-0 flex-col">
          <div className="h-20 md:h-30 w-24 md:w-32 bg-gray-300 rounded-md"></div>
          <div className="mt-2 w-24 md:w-32 h-6 bg-gray-300 rounded-md"></div>
        </div>
        <div className="h-6 w-24 md:w-32 bg-gray-300 rounded-md"></div>
      </div>
      <div className="flex justify-between items-center w-full md:w-1/3">
        <div className="h-6 w-20 bg-gray-300 rounded-md"></div>
        <div className="flex justify-start items-center">
          <div className="w-6 h-6 bg-gray-300 rounded-full mr-1"></div>
          <div className="h-6 w-16 bg-gray-300 rounded-md"></div>
        </div>
      </div>
    </div>
  );
};

export default CardSkeleton;
