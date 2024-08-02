import mongoose from "mongoose";

const UserShema = new mongoose.Schema(
  {
    username: String,
    password: String,
  },
  { timestamps: true }
);

const User = mongoose.models.User || mongoose.model("User", UserShema);

export default User;
