const Project = require("../model/project");

const Issue = require("../model/issue");

try {
  module.exports.create_issue = async function (req, res) {
    return res.render("create_issue", { nav: req.url });
  };

  module.exports.create_bug = async function (req, res) {
    const id = req.params.id;
    trimmed_id = id.trim();
    console.log(req.body.label);

    Issue.create(
      {
        project: trimmed_id,
        title: req.body.title,
        issueDescription: req.body.issueDescription,
        issueAuthor: req.body.issueAuthor,
        label: req.body.label,
      },
      function (err, newIssue) {
        if (err) {
          console.log("Couldnt create an issue", err);
          return;
        }

        Project.findById(trimmed_id, function (err, project) {
          if (err) {
            console.log("Couldnt find the porject with id", err);
            return;
          }
          project.issue.push(newIssue);
          project.save();
        });

        res.redirect(`/project/detail/${trimmed_id}`);
      }
    );
  };
} catch (err) {
  console.log("ERROR", err);
  return;
}
