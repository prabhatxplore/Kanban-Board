const Section = require("../models/Section");

exports.createSectionController = async (req, res) => {
  try {
    const { title, boardId, order } = req.body;
    const section = new Section({ title, boardId, order });

    await section.save();

    res.status(500).json({
      success: true,
      message: "Successfully added column",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.reorderSectionController = (req, res) => {
};
exports.removeSectionController = (req, res) => {};
