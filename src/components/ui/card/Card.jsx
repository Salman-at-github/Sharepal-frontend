import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ order }) => {
  console.log(order);
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 h-auto md:h-40 bg-gray-100 flex flex-col md:flex-row justify-between items-center px-4 md:px-10 py-4 rounded-md shadow-md cursor-pointer hover:shadow-lg mb-4 md:mb-0">
      <div className="flex justify-center items-center flex-col md:flex-row w-full md:w-1/3">
        <div className="flex justify-center items-center mr-0 md:mr-8 mb-4 md:mb-0 flex-col" >
          <img
            src="https://rukminim2.flixcart.com/image/200/200/k4k7f680/electrical-socket/j/p/z/5208-anchor-original-imafnfxycmxepg3v.jpeg?q=90"
            alt="prod"
            className="h-20 md:h-30 w-auto object-cover"
          />
          {order?.items.length > 1 && (
            <div className="mt-2 text-center line-clamp-1 ml-0 md:ml-4 p-1 md:p-2 w-full bg-white">
              {order?.items.length - 1} More{" "}
              {order?.items.length - 1 > 1 ? "Items" : "Item"}
            </div>
          )}
        </div>
        <h2 className="text-center md:text-left">{order?.items[0].name}</h2>
      </div>
      <div className="flex justify-between items-center w-full md:w-1/3">
        <h2 className="text-center md:text-left">₹{order?.total_order_amount}</h2>
        <div className="flex justify-start items-center">
          <GoDotFill className={`${order.stage === "Cancelled" ? "text-red-400" : order.stage === "Order Completed"? "text-green-400" : "text-yellow-400"} size-10`} />
          <h2 className="ml-1">{order.stage}</h2>
        </div>
      </div>
    </div>
  );
};

export default Card;
