const mongoose = require("mongoose");

// Establishes a connection to the MongoDB database

const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://agbomadziwilliam:<password>@cluster0.szc4krr.mongodb.net/"
    );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = connectDB;
