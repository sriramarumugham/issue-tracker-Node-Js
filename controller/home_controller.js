const Project = require("../model/project");

const Issue = require("../model/issue");

try {
  module.exports.home = async function (req, res) {
    Project.find({}, function (err, projects) {
      if (err) {
        console.log("error in getting the contacts", err);
        return;
      }
      return res.render("home", { projects: projects });
    });
  };

 
 
} catch (err) {
  console.log("err", err);
  return;
}
