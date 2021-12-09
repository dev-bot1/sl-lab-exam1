const mongoose = require("mongoose");

const WaterModel = mongoose.model(
  "my_data",
  mongoose.Schema({
    name: {
      type: String,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
  })
);

module.exports = WaterModel;
