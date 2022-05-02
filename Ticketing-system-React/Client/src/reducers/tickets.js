import { CREATE, DELETE, UPDATE, FETCH_ALL } from '../constants/actionConstants'

const tickets = (tickets = [], action) => {

    switch (action.type) {
        case CREATE:
            return [action.payload, ...tickets]

        case FETCH_ALL:
            return action.payload;

        case UPDATE:
            return tickets.map((ticket) => (ticket._id === action.payload._id ? action.payload : ticket));

        case DELETE:
            return tickets.map((ticket) => (ticket._id === action.payload._id ? action.payload : ticket));

        default:
            return tickets
    }
}

export default tickets;