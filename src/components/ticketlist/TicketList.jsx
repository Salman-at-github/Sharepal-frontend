import React, { useState } from "react";
import { FiAlertCircle } from "react-icons/fi";
import useGetTickets from "../../hooks/useGetTickets";
import { formatDate } from "../../utils/helpers";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";

const TicketList = ({ orderId }) => {
  const { isLoading, isError, data, error } = useGetTickets(orderId);

  const [showTicket, setShowTicket] = useState(false);

  if (isLoading) {
    return <div className="text-center mt-4">Loading...</div>;
  }

  if (isError) {
    return (
      <div className="text-center mt-4 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div>
      {data.length === 0 ? (
        <div className="text-center mt-4">
          <FiAlertCircle className="inline-block text-green-500 mr-1" />
          No tickets raised
        </div>
      ) : (
        <div className="mt-4">
          <h2 className="text-xl text-start font-semibold mb-4 text-gray-950 flex justify-start items-center">
            Raised Tickets{" "}
            {!showTicket ? (
              <IoMdArrowDropdown
                className="ml-2 cursor-pointer text-blue-500"
                onClick={() => setShowTicket((prevState) => !prevState)}
              />
            ) : (
              <IoMdArrowDropup
                className="ml-2 cursor-pointer text-blue-500"
                onClick={() => setShowTicket((prevState) => !prevState)}
              />
            )}
          </h2>
          {showTicket && (
            <div className="flex justify-start items-start gap-2 flex-wrap">
              {data.map((ticket) => (
                <div
                  key={ticket.id}
                  className="bg-slate-100 shadow-md p-4 mb-4"
                >
                  <div className="text-lg font-semibold">
                    {ticket.description}
                  </div>
                  <div className="text-sm text-gray-500">
                    Status: {ticket.status}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatDate(ticket.createdAt)}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default TicketList;
