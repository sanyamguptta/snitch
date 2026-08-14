import mongoose from "mongoose";
import { config } from "./config.js";

const connectToDB = async () => {
  try {
    await mongoose.connect(config.MONGO_URI);
    console.log("Connected to DB");
  } 
  catch (err) {
    console.error(err);
    throw err;
  }
};

export default connectToDB;
