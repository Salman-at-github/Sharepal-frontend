import { useState } from 'react';
import { IoClose } from 'react-icons/io5';
import { createTicket } from '../../api/tickets';

const TicketForm = ({ show, orderId }) => {
    const [description, setDescription] = useState('');
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault();
        try {
            setLoading(true)
            const response = await createTicket(orderId, description)
            if(response.status === 201){
                setLoading(false)
                handleClose()
                setError(null)
            }
        } catch (error) {
            setLoading(false)
            setError(error?.message)
        }
    };

    const handleClose = () => {
        show(false);
    };

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-75 z-50 px-8 md:px-0">
            <div className="bg-slate-100 relative rounded-lg p-8 shadow-md w-96">
                <button onClick={handleClose} className="absolute top-3 right-3 text-gray-600 z-[999]">
                    <IoClose />
                </button>
                <h2 className="text-xl font-semibold mb-4">Raise a Ticket</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <textarea
                            id="description"
                            name="description"
                            rows="4"
                            className="mt-1 block w-full border-gray-200 rounded-md shadow-sm focus:ring-indigo-200 focus:border-indigo-500 sm:text-sm p-3"
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {loading?"Submitting.." : "Submit"}
                        </button>
                    </div>
                    {error && 
                        <p className='text-red-400 my-6'>Error{error}</p>
                    }
                </form>
            </div>
        </div>
    );
};

export default TicketForm;
