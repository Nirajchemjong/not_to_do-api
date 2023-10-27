const mongoose = require("mongoose");

const taskScheme = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  hr: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    default: "good",
  },
});

module.exports = mongoose.model("TASK", taskScheme); //It will create a collection/ Table with name " TASK"  || Using the schema definition
