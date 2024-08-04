import mongoose from "mongoose";

const MONGODB_URI =
  "mongodb+srv://dlsltlvmfl:uDohRetGNU41wUQ2@cluster0.kbqmjov.mongodb.net/";

if (!MONGODB_URI) {
  throw new Error(
    "Please define the MONGODB_URI environment variable inside .env.local"
  );
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

async function connectToDB() {
  if (cached.conn) {
    return cached.conn;
  }

  if (!cached.promise) {
    const opts = {
      bufferCommands: false,
    };

    cached.promise = mongoose
      .connect(MONGODB_URI, opts)
      .then((mongoose) => {
        console.log("Database connected successfully");
        return mongoose;
      })
      .catch((e) => {
        console.error("Database connection error:", e);
      });
  }

  cached.conn = await cached.promise;
  return cached.conn;
}

export default connectToDB;
