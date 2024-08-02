import mongoose from "mongoose";

const AboutShema = new mongoose.Schema(
  {
    aboutme: String,
    noofprojects: String,
    yearofexperience: String,
    noofclients: String,
    skills: String,
  },
  { timestamps: true }
);

const About = mongoose.models.About || mongoose.model("About", AboutShema);

export default About;
