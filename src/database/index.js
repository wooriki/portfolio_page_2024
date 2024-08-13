import mongoose from "mongoose";
let cachedClient = null;

export default async function connectToDB() {
  if (cachedClient) {
    return cachedClient;
  }

  try {
    const mongoUri = process.env.MONGODB_URI;
    await mongoose.connect(mongoUri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    cachedClient = mongoose;
    console.log("Database connected successfully");
    return cachedClient;
  } catch (e) {
    console.error("Database connection failed", e);
    throw new Error("Database connection failed");
  }
}
