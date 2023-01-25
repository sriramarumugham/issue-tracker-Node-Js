const mongoose = require("mongoose");

const IssueSchema = new mongoose.Schema({
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Project",
  },
  title: {
    type: String,
    required: true,
  },
  issueDescription: {
    type: String,
    required: true,
  },
  issueAuthor: {
    type: String,
    required: true,
  },
  label: [{
    type: String,
  }
  ],
});

const Issue = mongoose.model("Issue", IssueSchema);

module.exports = Issue;
