import React from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

const Loader = () => {
  return (
    <div className="flex justify-center items-center my-10">
      <AiOutlineLoading3Quarters className="animate-spin text-4xl text-blue-500 mb-10" />
    </div>
  );
};

export default Loader;
