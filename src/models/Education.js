import mongoose from "mongoose";

const EducationShema = new mongoose.Schema(
  {
    degree: String,
    year: String,
    college: String,
  },
  { timestamps: true }
);

const Education =
  mongoose.models.Education || mongoose.model("Education", EducationShema);

export default Education;
