const mongoose = require("mongoose");

const mongoConnect = async () => {
  try {
    const dbLink = process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test";
    await mongoose.connect(dbLink);
  } catch (e) {
    console.log("MongoDb error", e);
  }
};

module.exports = mongoConnect;
