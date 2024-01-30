import express from "express";
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

mongoose.connect(process.env.MONGODB_URL)
.then (() => console.log("connected"))
.catch((err) => console.log(err));

const app = express();

app.get('/',(req,res) => {
    res.send("hii");
})


app.listen(3000, () => {
    console.log(`Server is running on port 3000`);
})