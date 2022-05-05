export class Ticket {
    
    constructor(
        public _id: string,
        public create_at: String,
        public updated_at: String,
        public deleted_at: String,
        public empid: String,
        public empname: String,
        public creator: String,
        public Date: String,
        public Resolved: Boolean,
        public ticket_desc: String

    ) {  }
}


// ticket_desc: String,
//     create_at: {
//         type: String
//     },
//     updated_at: {
//         type:String
//     },
//     deleted_at: {
//        type: String
//     },
//     empid: String,
//     empname: String,
//     creator: String,
//     Date: Date,
//     Resolved: {
//         type: Boolean,
//         default: false
//     }