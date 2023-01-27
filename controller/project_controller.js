const Project = require("../model/project");
const Issue = require("../model/issue");

try {
  module.exports.get_detail = async function (req, res) {
    const id = req.params.id;
    trimmed_id = id.trim();
    Project.findById(trimmed_id, function (err, projects) {
      if (err) {
        console.log("error in finding by id of a project", err);
        return;
      } else {
        Issue.find({ project: trimmed_id }, function (err, issues) {
          if (err) {
            console.log("error in finding by id of a issue", err);
            return;
          } else {
            return res.render("detail", { projects: projects, issues: issues });
          }
        });
      }
    });
  };

  module.exports.create_project = async function (req, res) {
    Project.create(
      {
        name: req.body.name,
        description: req.body.description,
        author: req.body.author,
      },
      function (err, newProject) {
        if (err) {
          console.log("error in creating a project", err);
          return;
        }
        console.log("Contact project", newProject);
        return res.redirect("/");
      }
    );
  };

  module.exports.newProject = async function (req, res) {
    return res.render("new_project");
  };

 
} catch (err) {
  console.log("ERROR", err);
  return;
}
