import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://dlsltlvmfl:M2c2tRUBBXl1QYC3@cluster0.s3gcp1w.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}

// M2c2tRUBBXl1QYC3
