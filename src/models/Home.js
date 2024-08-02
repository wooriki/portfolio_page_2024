import mongoose from "mongoose";

const HomeShema = new mongoose.Schema(
  {
    heading: "String",
    summary: "String",
  },
  { timestamps: true }
);

const Home = mongoose.models.Home || mongoose.model("Home", HomeShema);

export default Home;
