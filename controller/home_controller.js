const Project = require("../model/project");

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

  module.exports.newProject = async function (req, res) {
    return res.render("new_project");
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

  module.exports.create_issue = async function (req, res) {
    return res.render("create_issue");
  };

  module.exports.get_detail = async function (req, res) {
    const { id } = req.params;
    Project.findById(id, function (err, projects) {
      if (err) {
        console.log("error in finding by id of a project", err);
        return;
      }
      console.log(projects);

      return res.render("detail", { projects: projects });
    });
  };
} catch (err) {
  console.log("err", err);
  return;
}
