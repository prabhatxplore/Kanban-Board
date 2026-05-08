const {
  createCardController,
  reorderCardController,
  editCardController,
  deleteCardController,
} = require("../controllers/cardController");

const express = requrie("express");

const cardRoute = express.Route();

cardRoute.post("/create-card", createCardController);

cardRoute.post("/reorder-card", reorderCardController);

cardRoute.post("/edit-card", editCardController);

cardRoute.delete("/:cardId/remove-card", deleteCardController);

module.exports = cardRoute;
