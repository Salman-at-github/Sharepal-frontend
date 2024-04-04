import React from "react";
import { useParams } from "react-router-dom";
import { MdHelp } from "react-icons/md";

import Stages from "../stages/Stages";
import { formatDate, getRandomItemFromArray } from "../../utils/helpers";

const Order = () => {
  const { orderId } = useParams();
  const [orderData, setOrderData] = React.useState(null);

  React.useEffect(() => {
    const fetchOrder = async () => {
      try {
        const response = await fetch(
          `http://localhost:3030/api/v1/orders/${orderId}`
        );
        const data = await response.json();
        setOrderData(data?.data);
      } catch (error) {
        console.error("Error fetching order:", error);
      }
    };

    fetchOrder();
  }, [orderId]);

  return (
    <div className="container mx-auto px-10 pb-8 pt-28 bg-slate-200">
      {orderData ? (
        <div>
          <h1 className="text-3xl font-bold mb-8 text-center">Order Details</h1>
          <div className="bg-white p-6  mb-6 rounded-lg">
            <div>
            <h2 className="text-xl font-semibold mb-4">Customer Details</h2>
            <p className="mb-2">
              <span className="font-semibold">Name:</span>{" "}
              {orderData.customer_details.name}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Contact Number:</span>{" "}
              {orderData.customer_details.contact_number}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Email:</span>{" "}
              {orderData.customer_details.email}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Delivery Address:</span>{" "}
              {orderData.customer_details.delivery_address}
            </p>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg mb-6">
            <h2 className="text-xl font-semibold mb-4">Order Information</h2>
            <p className="mb-2">
              <span className="font-semibold">Order ID:</span>{" "}
              {orderData.order_id}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Order Date:</span>{" "}
              {formatDate(orderData.order_date)}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Delivery Date:</span>{" "}
              {formatDate(orderData.delivery_date)}
            </p>
            <p className="mb-2">
              <span className="font-semibold">Pickup Date:</span>{" "}
              {formatDate(orderData.pickup_date)}
            </p>
            <p className="mb-6">
              <span className="font-semibold">Total Order Amount:</span> ₹
              {orderData.total_order_amount}
            </p>
            <div className="mb-6">
              <Stages
                stages={orderData.stages}
                currentStage={orderData.current_stage}
                orderType={orderData.order_type}
                orderDate = {orderData.order_date}
              />
            </div>
            <div className="flex items-center text-blue-500  px-4 py-2 rounded-lg cursor-pointer hover:text-blue-400" title="Raise a ticket">
              <MdHelp className="mr-2 text-2xl" />
              Need Help?
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Items</h2>
            {orderData.items.map((item, index) => (
              <div key={index} className="flex items-center mb-4">
                <img
                  src={getRandomItemFromArray()}
                  alt={item.name}
                  className="h-16 w-16 object-cover rounded-lg mr-4"
                />
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p>Size: {item.size}</p>
                  <p>Quantity: {item.quantity}</p>
                  <p>Rental Amount: ₹{item.rental_amount}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center">
          <p className="text-xl font-semibold">Loading...</p>
        </div>
      )}
    </div>
  );
};

export default Order;
