const Task = require("../models/Task");

exports.getDashboard = async (req, res) => {
  try {
    const total = await Task.countDocuments();
    const completed = await Task.countDocuments({ status: "done" });
    const pending = await Task.countDocuments({ status: "todo" });

    res.json({
      total,
      completed,
      pending,
    });
  } catch (err) {
    res.status(500).json(err.message);
  }
};