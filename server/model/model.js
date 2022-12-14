const mongoose = require("mongoose");
var schema = new mongoose.Schema({
  bookname: {
    type: String,
    required: true,
  },
  bookauthor: {
    type: String,
    required: true,
  },
});
const Bookdb = mongoose.model("bookdb", schema);
module.exports = Bookdb;
