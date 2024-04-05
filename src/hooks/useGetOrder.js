import { useQuery } from "@tanstack/react-query";
import { fetchOrder } from "../api/orders";

const useGetOrder = (orderId) => {
    return useQuery({
        queryKey: ["order", orderId],
        queryFn: async ({ queryKey }) => {
            const [, orderId] = queryKey;
            const response = await fetchOrder(orderId);
            return response.data; // Accessing data directly
        }
    });
};

export default useGetOrder;
