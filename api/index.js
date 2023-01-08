import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import textRoute from "./routes/text.js";
import cors from "cors";

const app = express()
dotenv.config()

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to mongoDB.");
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log("mongoDB disconnected!");
});

//MIDDLEWARES
app.use(cors())
app.use(express.json());

app.use("/", textRoute)

app.listen(8800, ()=>{
  connect()
  console.log("Connected to backend")
})