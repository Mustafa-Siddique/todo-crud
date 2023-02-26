import mongoose from "mongoose";
import dotenv from "dotenv";

// Loading from .env
dotenv.config();

const connectDB = () => {
  // Extracting the database URI from the .env file
  const db = process.env.MONGO_URI;

  // Strict Query is set to false to allow for queries to be made without the need for the exact field name
  mongoose.set("strictQuery", false);
  mongoose.connect(db, { useNewUrlParser: true, useUnifiedTopology: true });

  // Mongoose connection events
  mongoose.connection.on("connected", () => {
    console.log("Connected to database");
  });
  mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from database");
  });
  mongoose.connection.on("error", (err) => {
    console.log("Error connecting to database", err);
  });
};

export default connectDB;
