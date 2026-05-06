const Section = require("../models/Section");

exports.createSectionController = async (req, res) => {
  try {
    const { title, boardId } = req.body;

    const lastSection = Section.findOne({ boardId }).sort({ order: -1 });

    let newOrder;
    if (lastSection) {
      newOrder = lastSection.order + 1000;
    } else {
      newOrder = 1000;
    }
    const section = new Section({ title, boardId, order: newOrder });

    await section.save();

    res.status(200).json({
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
exports.reorderSectionController = async (req, res) => {
  try {
    const { sectionId, title, nextOrder, prevOrder } = req.body;

    if (!sectionId) {
      return res.status(400).json({
        success: false,
        message: "Section ID is requried",
      });
    }

    let newOrder;
    if (prevOrder !== null && nextOrder !== null) {
      newOrder = (prevOrder + nextOrder) / 2;
    } else if (prevOrder === null && nextOrder !== null) {
      newOrder = nextOrder - 1000;
    } else if (prevOrder !== null && nextOrder === null) {
      newOrder = prevOrder + 1000;
    }

    const updateSection = await Section.findByIdAndUpdate(
      sectionId,
      { order: newOrder },
      { new: true },
    );
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.editSectionController = async (req, res) => {
  try {
    const { title, sectionId } = req.body;
    const updateCard = await Section.findByIdAndUpdate(
      sectionId,
      { title },
      { new: true },
    );

    if (!updateCard) {
      return res
        .status(404)
        .json({ success: false, message: "Section not found" });
    }

    res.status(200).json({
      success: false,
      message: "Section updated successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
exports.removeSectionController = async (req, res) => {
  try {
    const { sectionId } = req.params;

    const deleteSection = await Card.findByIdAndDelete(sectionId);

    if (!deleteSection) {
      return res
        .status(404)
        .json({ success: false, message: "Section not found" });
    }
    return res
      .status(200)
      .json({ success: true, message: "Section removed successfully" });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
