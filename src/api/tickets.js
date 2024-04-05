const host = process.env.REACT_APP_BACKEND_HOST;

const createTicket = async (id, description) => {
  try {
    const response = await fetch(`${host}/api/v1/tickets/add`, {
      method: "POST",
      headers: {
        'Content-Type': 'application/json' // Add Content-Type header
      },
      body: JSON.stringify({ order: id, description: description }),
    });
    return response; // Parse response as JSON
  } catch (error) {
    throw error;
  }
};

const getTickets = async (id) => {
  try {
    const response = await fetch(`${host}/api/v1/tickets/${id}`);
    return response.json(); // Parse response as JSON
  } catch (error) {
    throw error;
  }
};

module.exports = { createTicket, getTickets };
