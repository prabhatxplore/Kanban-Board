const Card = require("../models/Card");

exports.createCardController = async (req, res) => {
  try {
    const { title, description, sectionId } = req.body;

    const lastOrder = Card.findOne({ sectionId }).sort({ order: -1 });

    let newOrder;
    if (lastOrder) {
      newOrder = lastOrder.order + 1000;
    } else {
      newOrder = 1000;
    }

    const card = new Card({ title, description, sectionId, order: newOrder });
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
  try {
    const { cardId, newSectionId, prevOrder, nextOrder } = req.body;

    if (!cardId || !newSectionId) {
      res.status(400).json({
        success: false,
        message: "Card ID and Section ID are required",
      });
    }

    let newOrder;
    if (prevOrder !== null && nextOrder !== null) {
      newOrder = (prevOrder + nextOrder) / 2;
    } else if (prevOrder === null && nextOrder !== null) {
      newOrder = nextOrder - 1000;
    } else if (prevOrder !== null && nextOrder === null) {
      newOrder = prevOrder + 1000;
    } else {
      newOrder = 1000;
    }

    const updatedCard = await Card.findByIdAndUpdate(
      cardId,
      {
        sectionId,
        order: newOrder,
      },
      {
        new: true,
      },
    );

    res.status(200).json({
      success: true,
      message: "Card reordered successfully",
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

exports.editCardController = async (req, res) => {
  try {
    const { title, description, cardId } = req.body;

    const updateCard = await Card.findByIdAndUpdate(
      cardId,
      {
        title,
        description,
      },
      { new: true },
    );

    if (!updateCard) {
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });
    }

    res.status(200).json({
      success: true,
      message: "Card updated successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};

expots.deleteCardController = async (req, res) => {
  try {
    const { cardId } = req.params;

    const deletedCard = await Card.findByIdAndDelete(cardId);

    if (!deletedCard) {
      return res
        .status(404)
        .json({ success: false, message: "Card not found" });
    }

    return res
      .status(200)
      .json({ success: true, message: "Successfully deleted" });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
