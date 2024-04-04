import React from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import useGetOrders from '../../hooks/useGetOrders';
import Loader from '../common/Loader';
import Card from '../ui/card/Card';


const OrdersComponent = () => {
    const { data, error, fetchNextPage, hasNextPage, isFetching } = useGetOrders({ page: 1, limit: 4 });

    if (error) return <div>Error: {error.message}</div>;

    return (<div>
        <h2 className='text-center text-4xl font-semibold mt-32 mb-8'>My Orders</h2>
        <InfiniteScroll
            dataLength={data ? data.pages.flatMap(page => page.data).length : 0}
            next={fetchNextPage}
            hasMore={hasNextPage}
            scrollThreshold={0.9} // Adjust the threshold as needed
        >
            {data && data.pages.flatMap(page => page.data).map(order => (
                <div className='p-8 flex justify-center items-center flex-col' key={order._id}>
                    <Card  order={order}/>

                </div>
            ))}

        </InfiniteScroll>
            {isFetching && <Loader/>}
            <div className='p-1'>
            </div>
            </div>);
};

export default OrdersComponent;
