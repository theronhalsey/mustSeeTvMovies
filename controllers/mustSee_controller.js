var express = require("express");
var router = express.Router();
var mustSee = require("../models/mustSee.js");

router.get("/", function(req, res) {
  mustSee.all(function(data) {
    var moviesTvObj = {
      moviesTv: data
    };
    console.log(moviesTvObj);
    res.render("index", moviesTvObj);
  });
});

router.post("/api/mustsee", function(req, res) {
  mustSee.create([
    "title", "seen"
  ], [
    req.body.title, req.body.seen
  ], function(result) {

    res.json({ id: result.insertId });
  });
});

router.put("/api/mustsee/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  mustSee.update({
    seen: req.body.seen
  }, condition, function(result) {
    if (result.changedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

router.delete("/api/mustsee/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  mustSee.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

module.exports = router;