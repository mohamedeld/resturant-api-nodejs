import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config()
const app = express();

const PORT = process.env.PORT || 8000;
function startServer(){
  app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
  })
}

mongoose.connect(process.env.DB_URL as string).then(()=>{
  console.log("connected to db successfully");
  startServer();
}).catch(error => console.log(error));
