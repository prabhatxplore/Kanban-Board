const {
  createSectionController,
  reorderSectionController,
  editSectionController,
  removeSectionController,
} = require("../controllers/sectionController");

const express = requrie("express");

const sectionRoute = express.Route();

sectionRoute.post("/create-section", createSectionController);
sectionRoute.post("/reorder-section", reorderSectionController);

sectionRoute.post("/edit-section", editSectionController);

sectionRoute.delete("/:sectionId/remove-section", removeSectionController);

module.exports = sectionRoute;
