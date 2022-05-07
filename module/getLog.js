const fs = require("fs");
const path = "./log";

module.exports.getLog = (req, res, next) => {
  fs.readdir(path, (err, files) => {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    } else {
      res.send(files);
    }
  });
};
