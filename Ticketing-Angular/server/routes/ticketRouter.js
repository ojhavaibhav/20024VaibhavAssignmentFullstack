import express from 'express';
import { createTicket, updateTicket, getTickets, resolvedTicket}from '../controller/TicketController.js';
const router = express.Router();


router.post('/',createTicket)
router.get('/',getTickets)
router.put('/:id',updateTicket)
router.post('/resolved',resolvedTicket)

export default router;