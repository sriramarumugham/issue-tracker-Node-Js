
const searchFilter = document.getElementById("search_filter");
searchFilter.addEventListener("click", function (e) {
  e.preventDefault();

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const author = document.getElementById("author").value;
  const label = document.getElementById("label");
  const issueLabel = [];
  for (let i = 0; i < label.options.length; i++) {
    if (label.options[i].selected === true) {
      issueLabel.push(label.options[i].value);
    }
  }
  const issueDetails = document.getElementsByClassName("issue_detail");
  for (let j = 0; j < issueDetails.length; j++) {
    issueDetails[j].style.display = "";

    if (title.length > 0) {
      if (
        issueDetails[j]
          .getElementsByClassName("issue_title")[0]
          .innerHTML.toLowerCase()
          .indexOf(title.toLowerCase()) > -1
      ) {
        issueDetails[j].style.display = "";
      } else {
        issueDetails[j].style.display = "none";
      }
    }

   
    if (description.length > 0) {
      if (
        issueDetails[j]
          .getElementsByClassName("issue_description")[0]
          .innerHTML.toLowerCase()
          .indexOf(description.toLowerCase()) > -1
      ) {
        issueDetails[j].style.display = "";
      } else {
        issueDetails[j].style.display = "none";
      }
    }
   

    if (author.length > 0) {
      if (
        issueDetails[j]
          .getElementsByClassName("issue_author")[0]
          .innerHTML.toLowerCase()
          .indexOf(author.toLowerCase()) > -1
      ) {
        issueDetails[j].style.display = "";
      } else {
        issueDetails[j].style.display = "none";
      }
    }

    if (issueLabel.length > 0) {
      issueDetails[j].style.display = "none";

      for (let k = 0; k < issueLabel.length; k++) {
        const filterLabel = issueLabel[k];

        const listoFLabels =
          issueDetails[j].getElementsByClassName("issue_label");

        for (let l = 0; l < listoFLabels.length; l++) {
          if (listoFLabels[l].innerText === filterLabel) {
            issueDetails[j].style.display = "";
          }
        }
      }
    }
  }
});
