const host = process.env.REACT_APP_BACKEND_HOST;

const fetchOrders = async (page = 1, limit = 6) => {
    try {
        const response = await fetch(`${host}/api/v1/orders/all?page=${page}&limit=${limit}`);
        await new Promise(resolve => setTimeout(resolve, 2000));
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error('Failed to fetch orders');
        }
    } catch (error) {
        throw new Error(error);
    }
};
const fetchOrder = async (id) => {
    try {
        const response = await fetch(`${host}/api/v1/orders/${id}`);
        if (response.status === 200) {
            return await response.json();
        }
    } catch (error) {
        throw new Error(error);
    }
};


module.exports = {fetchOrders, fetchOrder}
