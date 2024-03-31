import React from "react";
import { GoDotFill } from "react-icons/go";

const Card = ({ order }) => {
  console.log(order);
  return (
    <div className="w-full h-40 bg-slate-100 flex justify-between items-center px-10 rounded-md shadow-md cursor-pointer hover:shadow-lg">
      <div className="flex flex-row justify-center items-center w-1/3">
        <div className="flex justify-center items-center flex-col mr-8">
          <img
            src="https://rukminim2.flixcart.com/image/200/200/k4k7f680/electrical-socket/j/p/z/5208-anchor-original-imafnfxycmxepg3v.jpeg?q=90"
            alt="prod"
            className="size-20"
          />
          {order?.items.length > 1 && (
            <span className="mt-4 p-2 bg-white">
              {order?.items.length - 1} More{" "}
              {order?.items.length - 1 > 1 ? "Items" : "Item"}
            </span>
          )}
        </div>
        <h2>{order?.items[0].name}</h2>
      </div>
      <h2>₹{order?.total_order_amount}</h2>
      <div className="flex justify-start items-center">
        <GoDotFill className={`${order.stage === "Cancelled" ? "text-red-400" : order.stage === "Order Completed"? "text-green-400" : "text-yellow-400"} size-10`} />
        <h2>{order.stage}</h2>
      </div>
    </div>
  );
};

export default Card;
