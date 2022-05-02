import mongoose from "mongoose";


const ticketSchema = mongoose.Schema({

    ticket_desc: String,
    create_at: {
        type: String
    },
    updated_at: {
        type:String
    },
    deleted_at: {
       type: String
    },
    empid: String,
    empname: String,
    creator: String,
    Date: Date,
    Resolved: {
        type: Boolean,
        default: false
    }
})


const ticketModel = mongoose.model('ticketCollection', ticketSchema)

export default ticketModel;
