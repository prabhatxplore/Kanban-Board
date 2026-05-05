const mongoose = requrie("mongoose");

const CardSchema = mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  sectionId: { type: mongoose.Schema.Types.ObjectId, ref: "Section" },
  order: { type: "Number", requried: true },
});

module.exports = mongoose.model("Card", CardSchema);
