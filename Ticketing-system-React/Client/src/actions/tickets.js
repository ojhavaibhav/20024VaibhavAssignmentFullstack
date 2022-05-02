import { CREATE, DELETE, UPDATE, FETCH_ALL } from '../constants/actionConstants'
import { createTicket, getTicket, resolvedTicket, updateTicket } from '../services/api';


export const createTicketAction = (ticket) => async dispatch => {

    try {
        const { data } = await createTicket(ticket)

        dispatch({ type: CREATE, payload: data })

    } catch (error) {
        console.log(error);
    }
}


export const getTicketAction = () => async dispatch => {

    try {
        const { data } = await getTicket();

        dispatch({ type: FETCH_ALL, payload: data })

    } catch (error) {
        console.log(error);
    }
}


export const updateTicketAction = (id, newTicket) => async dispatch => {
    try {
        const { data } = await updateTicket(id, newTicket);

        dispatch({ type: UPDATE, payload: data })

    } catch (error) {
        console.log(error);
    }
}

export const resolvedTicketAction = (ticket) => async (dispatch) => {
    try {

        const { data } = await resolvedTicket(ticket);

        dispatch({ type: DELETE, payload: data });

    } catch (error) {
        console.log(error.message);
    }
};

