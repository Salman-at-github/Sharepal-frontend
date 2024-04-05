import React from "react";
import { Link } from "react-router-dom";
import InfiniteScroll from "react-infinite-scroll-component";
import useGetOrders from "../../hooks/useGetOrders";
import Card from "../ui/card/Card";
import Error from "../error/Error";
import CardSkeleton from "../ui/card/CardSkeleton";

const OrdersComponent = () => {
  const { data, error, fetchNextPage, hasNextPage, isFetching, isError } =
    useGetOrders({ page: 1, limit: 4 });
  if (isError) {
    return <Error message={error.message} />;
  }

  return (
    <div className="px-10 pb-8 pt-28 text-gray-600">
      <h2 className="mb-8 text-gray-500"><span className="cursor-pointer hover:text-blue-600">Home</span> {`>`} <span className="cursor-pointer hover:text-blue-600">My Profile</span> {`>`} <span className="cursor-pointer hover:text-blue-600"><Link to="/">My Orders</Link></span></h2>
      <InfiniteScroll
        dataLength={data ? data.pages.flatMap((page) => page.data).length : 0}
        next={fetchNextPage}
        hasMore={hasNextPage}
        scrollThreshold={0.9} // Adjust the threshold as needed
      >
        {data &&
          data.pages
            .flatMap((page) => page.data)
            .map((order) => (
              <Link
                to={`/order/${order.order_id}`}
                className="px-8 flex justify-center items-center flex-col mb-8"
                key={order._id}
              >
                <Card order={order} />
              </Link>
            ))}
      </InfiniteScroll>
      {isFetching && 
        <div className="p-8 flex justify-center items-center flex-col">
            <CardSkeleton/>
            <CardSkeleton/>
        </div>
      }
    </div>
  );
};

export default OrdersComponent;
