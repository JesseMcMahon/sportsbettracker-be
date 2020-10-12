const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");

const User = require("../../models/User");

router.post("/updatewins", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      user.wins += 1;
      user.save();
      console.log(user);
    })
    .catch((err) => console.log(err));
});

router.post("/updatelosses", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      user.losses += 1;
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

router.post("/updatewinpercentage", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      const totalLoss = user.losses;
      const totalWin = user.wins;
      const totalPicks = totalLoss + totalWin;
      user.winPercentage = Math.floor((totalWin / totalPicks) * 100);
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

router.post("/addnewpick", (req, res) => {
  User.findOne({ username: req.body.username })
    .then((user) => {
      if (!user) {
        return res.statusCode(400).end();
      }
      user.pickHistory.push({
        user: user.username,
        date: "Today",
        leaguePicked: "NFL",
        game: "ATL vs NE",
        teamPicked: "ATL",
        pickType: "Spread (-3.5)",
        isUpcoming: true,
      });
      user.save();
      console.log(user);
    })
    .catch((err) => next(err));
});

router.get("/getleaderboard", (req, res) => {
  User.find()
    .sort([["winPercentage", "descending"]])
    .then(function (users) {
      const leaderboard = [];
      for (i = 0; i < 10; i++) {
        let rankNum = i;
        users[i].rank = rankNum + 1;
        leaderboard.push(users[i]);
      }
      res.send(leaderboard);
      return leaderboard;
    });
});

router.get("/:profile", (req, res) => {
  User.findOne({ username: req.params.profile }).then((user) => {
    if (!user) {
    }
    res.send(user);
    return user;
  });
});

module.exports = router;
