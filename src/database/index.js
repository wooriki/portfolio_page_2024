import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://dlsltlvmfl:uDohRetGNU41wUQ2@cluster0.kbqmjov.mongodb.net/"
    );
    console.log("Database connected successfully");
  } catch (e) {
    console.log(e);
  }
}
