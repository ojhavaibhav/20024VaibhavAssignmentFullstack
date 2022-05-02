import mongoose from 'mongoose';
import Ticket from '../model/ticket.js';


export const createTicket = async (req, res) => {
    const ticket = req.body;

    const newTicket = new Ticket({ ...ticket, creator: req.userId, create_at: new Date().toISOString(), Date: new Date().toISOString() })

    try {
        const result = await newTicket.save();
        res.status(200).json(newTicket)

    } catch (error) {
        res.status(404).json({ message: error.message })
    }

}


export const getTickets = async (req, res) => {
    try {

        const ticket = await Ticket.find().sort({ Date: -1 });
        res.status(200).json(ticket);

    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}


export const updateTicket = async (req, res) => {

    try {
        const { empid, ticket_desc, creator } = req.body;
        const { id } = req.params;

        if (!mongoose.Types.ObjectId.isValid(id)) return res.send(`No ticket with id: ${id}`);

        const updateTicket = { creator, empid, ticket_desc, updated_at: new Date().toISOString(), _id: id }

        const result = await Ticket.findByIdAndUpdate(id, updateTicket, { new: true });

        res.json(result);

    } catch (error) {
        console.log(error)
    }
}




export const resolvedTicket = async (req, res) => {
    // const ticket = req.body;mlm

    try {
        console.log(req.body)
        const ticket = req.body;
        const { empid, ticket_desc, creator, _id } = ticket;


        if (!mongoose.Types.ObjectId.isValid(_id)) return res.send(`No ticket with id: ${_id}`);

        const resolvedTicket = { creator, empid, ticket_desc, _id, deleted_at: new Date().toISOString() }

        const result = await Ticket.findByIdAndUpdate(_id, resolvedTicket, { new: true });

        res.json(result);

    } catch (error) {
        console.log(error)
    }
}




