import express from "express";
import mongoose from "mongoose";
import "dotenv/config";

const app = express();

mongoose.connect(process.env.DB_CONNECT, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}, () => {
    console.log("Database connected successfully!");
})

app.get("/", (req, res) => {
    res.send("hello world");
})

app.listen(4000, () => {
    console.log("Server started")
})