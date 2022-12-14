var Bookdb = require("../model/model");
// create and save new book
exports.create = (req, res) => {
  // validate request
  if (!req.body) {
    res.status(400).send({ message: "Content can not be emtpy!" });
    return;
  }
  // new book
  const book = new Bookdb({
    bookname: req.body.bookname,
    bookauthor: req.body.bookauthor,
  });
  book
    .save(book)
    .then((data) => {
      //   res.send(data);
      res.redirect("/");
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some Error has occured",
      });
    });
};

// find and search books
exports.find = (req, res) => {
  if (req.query.id) {
    const id = req.query.id;

    Bookdb.findById(id)
      .then((data) => {
        if (!data) {
          res.status(404).send({ message: "Not found user with id " + id });
        } else {
          res.send(data);
        }
      })
      .catch((err) => {
        res.status(500).send({ message: "Erro retrieving user with id " + id });
      });
  } else {
    Bookdb.find()
      .then((book) => {
        res.send(book);
      })
      .catch((err) => {
        res.status(500).send({ message: err.message || "Error Occured" });
      });
  }
};
// update book by id
exports.update = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await Bookdb.findOne({ _id })
    res.render('editBook', {
      book: data
    })
  } catch (error) {
    res.send("SERVER ERROR")
  }
};
// find and delete books by id
exports.delete = async (req, res) => {
  const _id = req.params.id;
  try {
    const data = await Bookdb.deleteOne({ _id })
    res.redirect('/')
  } catch (error) {
    console.log(error);
    res.status(400).send('Cannot delete')
  }
};
