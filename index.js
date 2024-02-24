const express = require("express");
const mongoose = require("mongoose");
const connectDB = require("./api");

const app = express();

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server listening to ${PORT}`);
});
