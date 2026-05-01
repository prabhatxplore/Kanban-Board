const Card = require("../models/Card");

exports.createCardController = async (req, res) => {
  try {
    const { title, sectionId, order } = req.body;

    const card = new Card({ title, sectionId, order });
    await card.save();

    res.status(200).json({
      success: true,
      message: "Successfully saved card",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.reorderCardController = async (req, res) => {
  const { order } = req.body;
  
};
