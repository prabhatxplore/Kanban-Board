const Board = require("../models/Board");

exports.createBoardController = async (req, res) => {
  // owner is added from the session by checking user login state
  const { title, description, members } = req.body;

  const owner = 1234; //use session to add owner

  const board = new Board({ title, description, owner });
  await board.save();
};

exports.editBoardController = async (req, res) => {
  const { BoardId } = req.params;
  const { title, description, members } = req.body;
  //   save the changes
};

exports.deleteBoardController = async (req, res) => {
  const { BoardId } = req.params;

  // check whether it s the owner or not

  // last delete the board
};

exports.addMembersController = async (req, res) => {
  const { members } = req.body;
  const { BoardId } = req.params;
  // check the whether owner or not
  const board = Board.findById(BoardId);
  //   APPEND BOARD MEMEBERS.
  //   THEN SAVE
};

exports.removeMemebersController = async (req, res) => {
  const { members } = req.body;
  const { BoardId } = req.params;

  // check the owner or not
  const board = Board.findById(BoardId);
  //   remove member and save
};
