const express = require("express");
const connectDB = require("./utils/db");
const authRoute = require("./routes/authRoute");
const app = express();

app.use("/api", authRoute);

connectDB();
app.listen(3000, () => {
  console.log("app is listening");
});
