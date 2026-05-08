const express = require("express");
const {
  createBoardController,
  editBoardController,
  deleteBoardController,
  addMembersController,
  removeMemebersController,
  getMyBoardController,
} = require("../controllers/boardController");
const boardRouter = express.Router();

boardRouter.get("/get-my-board", getMyBoardController);

boardRouter.post("/create-board", createBoardController);
boardRouter.post("/:BoardId/edit-board", editBoardController);

boardRouter.delete("/:BoardId/delete-board", deleteBoardController);

boardRouter.post("/:BoardId/add-member", addMembersController);

boardRouter.delete("/:BoardId/remove-member", removeMemebersController);

module.exports = boardRouter;
