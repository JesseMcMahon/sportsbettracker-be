const mongoose = require("mongoose");

const PickSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  game: {
    type: String,
    required: true,
  },
  teamPicked: {
    type: String,
    required: true,
  },
  pickType: {
    type: String,
    required: true,
  },
  isUpcoming: {
    type: Boolean,
    default: true,
  },
  didWin: {
    type: Boolean,
    default: null,
  },
});

module.exports = Pick = mongoose.model("pick", PickSchema);
