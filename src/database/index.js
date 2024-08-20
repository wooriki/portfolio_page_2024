import mongoose from "mongoose";

let cachedConnection = null;

export default async function connectToDB() {
  if (cachedConnection) {
    return cachedConnection;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    if (!mongoUri) {
      throw new Error("MONGODB_URI is not defined in environment variables");
    }

    const connection = await mongoose.connect(mongoUri);
    cachedConnection = connection;
    console.log("Database connected successfully");

    return cachedConnection;
  } catch (e) {
    console.error("Database connection failed", e);
    throw new Error("Database connection failed");
  }
}
