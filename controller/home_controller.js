try {
  module.exports.home = async function (req, res) {
    return res.render("home");
  };
} catch (err) {
  console.log("err", err);
  return;
}
