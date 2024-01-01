import express from "express";
import authRouter from './routes/auth.route.js'
import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config();
const app = express();

mongoose.connect(process.env.MONGO_URL).then(() => {
    console.log('Connected Successfully...');
}).catch((err) => {
    console.log(err.message);
})

app.use(express.json());

app.use('/api/auth', authRouter)

app.listen(3000, () => {
    console.log('Port running 3000')
})