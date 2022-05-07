const express = require("express");
const logRouter = require("./router/log");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

const PORT = process.env.PORT || 3001;

// router
app.use("/", logRouter);
app.get("/", (req, res) => {
  res.send("nodejs filesystem");
});

app.listen(PORT);
