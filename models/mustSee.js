var orm = require("../config/orm.js");

var mustSee = {
  all: function(cb) {
    orm.all("moviesTv", function(res) {
      cb(res);
    });
  },
  create: function(cols, vals, cb) {
    orm.create("moviesTv", cols, vals, function(res) {
      cb(res);
    });
  },
  update: function(objColVals, condition, cb) {
    orm.update("moviesTv", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("moviesTv", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = mustSee;