const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
app.get("/", (req, res) => {
  res.send("Welcome..");
});

const dbURI = process.env.MONGODB_URI;
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("connected to db"))
  .catch((err) => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
