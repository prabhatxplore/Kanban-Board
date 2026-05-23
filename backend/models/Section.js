const mongoose = require("mongoose");

const SectionSchema = new mongoose.Schema({
  title: { type: String, required: true },
  boardId: { type: mongoose.Schema.Types.ObjectId, ref: "Board" },
  order: { type: Number, requried: true },
});

module.exports = mongoose.model("Section", SectionSchema);
