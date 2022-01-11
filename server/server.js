import express, { json } from "express";
import mongoose from "mongoose";
import { config as _config } from "dotenv";
import session from "express-session";
import cors from "cors";
import connectDB from "./config/db.js";
import MongoStore from "connect-mongo";

//Load config
_config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5001;
// const session = require('express-session');
// const MongoStore = require('connect-mongo')

app.use("*", (req, res, next) => {
  console.log(req.originalUrl);
  next();
});

//connect to database
connectDB();
app.use(json());

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Sessions
app.use(
  session({
    secret: "keyboard cat",
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
  })
);

//CORS
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);

//Server
app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});
