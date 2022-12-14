const express = require("express");
const dotenv = require("dotenv");
const app = express();
const bodyparser = require("body-parser");
dotenv.config({ path: "config.env" });
const PORT = process.env.PORT || 8000;
const path = require("path");
const { Connection } = require("mongoose");
const Bookdb = require('./server/model/model')

// Connection database
const connectDB = require("./database/connection");
connectDB();
// parse request to bodyparser
app.use(bodyparser.urlencoded({ extended: true }));
// Set view engine
app.set("view engine", "ejs");


app.get('/', async (req, res) => {

  try {
    const data = await Bookdb.find()
    res.render('index', {
      books: data
    })
  } catch (error) {
    res.send("Server error")
  }
})
// app.set("views", path.resolve(__dirname, "views/admin"));
// load asserts
// app.use("/css", express.static(path.resolve(__dirname, "assests/css")));
// app.use("/js", express.static(path.resolve(__dirname, "assests/js")));
//load routers
app.use("/", require("./server/routes/router"));
app.listen(PORT, () => {
  console.log(`Example app listening at http://localhost:${PORT}`);
});
