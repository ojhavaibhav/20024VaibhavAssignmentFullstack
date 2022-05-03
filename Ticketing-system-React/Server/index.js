import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import userRouter from './routes/userRouter.js';
import ticketRouter from './routes/ticketRouter.js';
import 'dotenv/config';


const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/users',userRouter)
app.use('/tickets',ticketRouter)

const port = process.env.PORT;
const url = process.env.URL;



mongoose.connect(url).then(() => {
    app.listen(port, () => {
        console.log(`server is running at ${port}`)
    })
}).catch(err => {
    console.log('Error:', err.message)
})
