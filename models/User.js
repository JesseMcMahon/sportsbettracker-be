const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const PickSchema = new mongoose.Schema({
  user: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  leaguePicked: {
    type: String,
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
});

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  username: {
    type: String,
    required: true,
    min: 6,
  },

  email: {
    type: String,
    required: true,
  },

  password: {
    type: String,
    required: true,
  },
  // image: {
  //   type: String,
  //   default: "default.img",
  // },

  // isDeleted: {
  //   type: Boolean,
  //   default: false,
  // },

  wins: {
    type: Number,
    default: 0,
  },

  losses: {
    type: Number,
    default: 0,
  },

  winPercentage: {
    type: Number,
    default: 0,
  },
  rank: {
    type: Number,
  },

  pickHistory: [PickSchema],
});

module.exports = User = mongoose.model("user", UserSchema);
