import path from "path";
import dotenv from "dotenv"
import express from "express";
import cookieParser from "cookie-parser";

import connectDB from "./config/db.js";

dotenv.config();
const port = process.env.PORT || 5000 ;

connectDB();

const app = express();

app.use(express.urlencoded({extends: true}));
app.use(express.json());
app.use(cookieParser());

app.get("/",( req,res) => {
    res.send("Hello World");
})

app.listen( port, () => console.log(`Server running on port: ${port}`));