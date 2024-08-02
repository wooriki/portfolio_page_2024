import mongoose from "mongoose";

const ProjectShema = new mongoose.Schema(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
  },
  { timestamps: true }
);

const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectShema);

export default Project;
