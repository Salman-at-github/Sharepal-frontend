import { useQuery } from "@tanstack/react-query";
import { getTickets } from '../api/tickets';

const useGetTickets = (id) => {
  return useQuery({
    queryKey: ['ticket', id],
    queryFn: async ({ queryKey }) => {
      const [, id] = queryKey;
      try {
        const response = await getTickets(id);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  });
};

export default useGetTickets;
