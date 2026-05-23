const {
  createSectionController,
  reorderSectionController,
  editSectionController,
  removeSectionController,
} = require("../controllers/sectionController");

const express = require("express");

const sectionRoute = express.Router();

sectionRoute.post("/create-section", createSectionController);
sectionRoute.post("/reorder-section", reorderSectionController);

sectionRoute.post("/edit-section", editSectionController);

sectionRoute.delete("/:sectionId/remove-section", removeSectionController);

module.exports = sectionRoute;
