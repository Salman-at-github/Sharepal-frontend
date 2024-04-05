import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { MdHelp } from "react-icons/md";
import { formatIndianNumber, getRandomItemFromArray } from "../../utils/helpers";
import Stages from "../stages/Stages";
import useGetOrder from "../../hooks/useGetOrder";
import Error from "../error/Error";
import TicketForm from "../forms/TicketForm";
import TicketList from "../ticketlist/TicketList";

const Order = () => {
    const { orderId } = useParams();
    const { data, isLoading, error, isError } = useGetOrder(orderId);

    const [showForm, setShowForm] = useState(false)
   

    if (isLoading) {
        return (
            <div className="container mx-auto px-10 pb-8 pt-28 bg-slate-200">
                <div className="text-center">
                    <p className="text-xl font-semibold">Loading...</p>
                </div>
            </div>
        );
    }

    if (isError) {
        return (
            <Error message={error.message}/>
        );
    }
    
    return (
        <div className="container mx-auto px-10 pb-8 pt-28 text-gray-600">
            <div>
                <h2 className="mb-8 text-gray-500"><span className="cursor-pointer hover:text-blue-600">Home</span> {`>`} <span className="cursor-pointer hover:text-blue-600">My Profile</span> {`>`} <span className="cursor-pointer hover:text-blue-600"><Link to="/">My Orders</Link></span> {`>`} {orderId}</h2>
                
                <div className="bg-white p-6 rounded-lg mb-6">
                    <h2 className="text-xl font-semibold mb-4 text-gray-950">Order Information</h2>
                    <p className="mb-2">
                        <span className="font-semibold">Order ID:</span>{" "}
                        {data?.order_id}
                    </p>
                    
                    <p className="mb-6">
                        <span className="font-semibold">Total Order Amount:</span> ₹
                        {formatIndianNumber(data?.total_order_amount)}
                    </p>
                    <Stages
                        stages={data?.stages}
                        currentStage={data?.current_stage}
                        orderType={data?.order_type}
                        orderDate={data?.order_date}
                    />
                    <div className="flex items-center text-blue-500 mt-4  px-4 py-2 rounded-lg cursor-pointer hover:text-blue-400 w-fit" title="Raise a ticket" onClick={()=>{setShowForm(true)}}>
                        <MdHelp className="mr-2 text-2xl" />
                        Need Help?
                    </div>
                    <TicketList orderId={data?._id}/>
                </div>
                <div className="flex justify-start items-center md:items-start flex-col md:flex-row gap-10">
                <div className="bg-white p-6 mb-6 w-full rounded-lg md:order-2">
                        <h2 className="text-xl font-semibold mb-4 text-gray-950">Customer Details</h2>
                        <p className="mb-2">
                            <span className="font-semibold">Name:</span>{" "}
                            {data?.customer_details.name}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Contact Number:</span>{" "}
                            {data?.customer_details.contact_number}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Email:</span>{" "}
                            {data?.customer_details.email}
                        </p>
                        <p className="mb-2">
                            <span className="font-semibold">Delivery Address:</span>{" "}
                            {data?.customer_details.delivery_address}
                        </p>
                </div>
                <div className="bg-white p-6 w-full rounded-lg md:order-1 ">
                    <h2 className="text-xl font-semibold mb-4 text-gray-950">Items</h2>
                    {data?.items.map((item, index) => (
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
                                <p>Rental Amount: ₹{formatIndianNumber(item.rental_amount)}</p>
                            </div>
                        </div>
                    ))}
                </div>
                </div>
            </div>
            {showForm &&
                <TicketForm show={setShowForm} orderId={data?._id}/>
            }
        </div>
    );
};

export default Order;
