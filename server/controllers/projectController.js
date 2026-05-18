const Project = require("../models/Project");

exports.createProject = async (req, res) => {
  try {
    const project = await Project.create({
      ...req.body,
      createdBy: req.user.id,
    });

    res.status(201).json(project);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

exports.getProjects = async (req, res) => {
  const projects = await Project.find().populate("members");
  res.json(projects);
};