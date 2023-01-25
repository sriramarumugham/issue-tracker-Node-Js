const Project = require("../model/project");
const Issue=require('../model/issue');
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
    return res.render("create_issue" , {nav: req.url});
  };

  module.exports.create_bug = async function (req, res) {

    const id = req.params.id 
    trimmed_id = id.trim();
    console.log(req.body.label);

     Issue.create({
      project:trimmed_id,
      title:req.body.title,
      issueDescription:req.body.issueDescription,
      issueAuthor:req.body.issueAuthor,
      label:req.body.label
    }, function(err , newIssue){
      if(err){
        console.log("Couldnt create an issue" , err);
        return;
       
      }
      // console.log(newIssue);
      // Issue.label.push(req.body.label);
      // Issue.save();
      res.redirect(`/detail/${trimmed_id}`)
    })
    
    
  
  
    // console.log(req.body , req.params)
  };

  

  module.exports.get_detail = async function (req, res) {
    const id = req.params.id;
    trimmed_id = id.trim();

   

    Project.findById(trimmed_id, function (err, projects) {
      if (err) {
        console.log("error in finding by id of a project", err);
        return;
      }
      else{
        // console.log(projects);

        Issue.find( {project:trimmed_id}, function(err, issues){
          if (err) {
            console.log("error in finding by id of a issue", err);
            return;
          }
          else{
            // console.log("issues" , issues);
            return res.render("detail", { projects: projects  , issues:issues});
          }
       
        } )
      }
      
    });

    
    
  };

} catch (err) {
  console.log("err", err);
  return;
}
