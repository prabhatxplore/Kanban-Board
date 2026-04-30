const Board = require("../models/Board");

exports.createBoardController = async (req, res) => {
  // owner is added from the session by checking user login state
  try {
    const { title, description, members } = req.body;
    const ownerId = req.session.user._id;
    const board = new Board({ title, description, owner: ownerId });
    await board.save();
  } catch (err) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.editBoardController = async (req, res) => {
  try {
    const { BoardId } = req.params;
    const { title, description, members } = req.body;
    const ownerId = req.session.user._id;
    const board = await Board.findById(BoardId);
    if (board.owner === ownerId) {
      board.title = title;
      board.description = description;
      board.members = members;
    } else {
      res.status(500).json({
        success: false,
        message: "user is not authorized",
      });
    }
  } catch (err) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  //   save the changes
};

exports.deleteBoardController = async (req, res) => {
  try {
    const { BoardId } = req.params;

    // check whether it s the owner or not
    const ownerId = req.session.user._id;
    // last delete the board

    const deletedItem = await Board.findByIdAndDelete({
      _id: BoardId,
      owner: ownerId,
    });
    if (!deletedItem) {
      return res
        .status(403)
        .json({ success: false, message: "Not authorized or item not found" });
    }

    res.json({ message: "Deleted successfully", deletedItem });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

exports.addMembersController = async (req, res) => {
  const { members } = req.body;
  const { BoardId } = req.params;
  const ownerId = req.session.user._id;
  // check the whether owner or not
  const updated = Board.findByIdAndUpdate(
    { _id: BoardId, owner: ownerId },
    { $addToSet: { members: members } },
    { new: true },
  );

  if (!updated) {
    return res.status(403).json({
      status: false,
      message: "Not authorized or document not found",
    });
  }
  //   APPEND BOARD MEMEBERS.
  //   THEN SAVE
};

exports.removeMemebersController = async (req, res) => {
  try {
    const { members } = req.body;
    const { BoardId } = req.params;
    const ownerId = req.session.user._id;
    // check the owner or not
    const updated = await Board.findOneAndUpdate(
      {
        _id: BoardId,
        owner: ownerId,
        members,
      },
      { $pull: { members } },
      { new: true },
    );
    if (!updated) {
      return res.status(404).json({
        success: false,
        message: "Member not found or not authorized",
      });
    }

    return res.json({
      success: true,
      message: "Member removed successfully",
    });
  } catch (err) {
    res.status(500).json({ success: false, message: "Internal Server Error" });
  }
};
