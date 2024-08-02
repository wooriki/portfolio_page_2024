import mongoose from "mongoose";

const ExperienceShema = new mongoose.Schema(
  {
    position: String,
    company: String,
    duration: String,
    location: String,
    jobprofile: String,
  },
  { timestamps: true }
);

const Experience =
  mongoose.models.Experience || mongoose.model("Experience", ExperienceShema);

export default Experience;
