import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchOrders } from "../api/fetchOrders";

const useGetOrders = (ordersQuery) => {
    const { data, error, fetchNextPage, hasNextPage, isFetching } = useInfiniteQuery({
        queryKey: ["orders", ordersQuery], // queryKey should be an array
        queryFn: async ({ pageParam }) => fetchOrders(pageParam, ordersQuery.limit), // Adjusted here
        getNextPageParam: (lastPage, _pages) => {
            const currentPage = lastPage.pagination.currentPage;
            const totalPages = lastPage.pagination.totalPages;
            return currentPage < totalPages ? currentPage + 1 : undefined;
        }
    });

    return {
        data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetching
    };
};

export default useGetOrders;
