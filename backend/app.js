require("dotenv").config();
const express = require("express");
const connectDB = require("./utils/db");
const authRoute = require("./routes/authRoute");
const boardRouter = require("./routes/boardRoute");
const app = express();
const MongoStore = require("connect-mongo").default;
const session = require("express-session");
const sectionRoute = require("./routes/sectionRoute");
const cardRoute = require("./routes/cardRoute");
const cors = require("cors");
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET || "heyman",
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },

    store: MongoStore.create({
      mongoUrl: process.env.MONGO_URL,
      collectionName: "sessions",
      ttl: 60 * 60 * 24 * 7,
    }),
  }),
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/auth", authRoute);
app.use("/api/board", boardRouter);
app.use("/api/card", cardRoute);
app.use("/api/section", sectionRoute);

connectDB();
app.listen(3000, () => {
  console.log("app is listening");
});
