const mongoose = require("mongoose");

const connectDB = async () => {
  await mongoose
    .connect("mongodb://localhost:27017/Kanban")
    .then(() => console.log("MongoDB connected success"))
    .catch((err) => console.log(err));
};
mongoose.connection.on("error", (err) => {
  console.error("Post-connection error:", err);
});
module.exports = connectDB;
