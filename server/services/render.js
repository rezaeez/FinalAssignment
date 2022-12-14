const axios = require("axios");

exports.homeRoutes = (req, res) => {

};
exports.addbook = (req, res) => {
  res.render("addbook");
};
exports.editbook = (req, res) => {
  const _id = req.params.id
  console.log(_id)
};
