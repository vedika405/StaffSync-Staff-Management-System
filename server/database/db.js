
import "dotenv/config";
import dns from "node:dns";
import mongoose from "mongoose";

// DNS fix for MongoDB Atlas connection
dns.setServers(["8.8.8.8", "1.1.1.1"]);

const connectToDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log("Connection with database successful");
  } catch (error) {
    console.error("Database connection failed:", error.message);
    throw error;
  }
};

export default connectToDatabase;
