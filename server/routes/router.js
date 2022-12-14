const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");
const Bookdb = require("../model/model");
// Home route
// method get

route.get("/admin", services.homeRoutes);
route.get("/admin/addbook", services.addbook);
route.get("/admin/editbook", services.editbook);

// API Route
route.post("/api/createbook", controller.create);
route.get("/api/books", controller.find);
route.get("/api/edit/:id", controller.update);
route.get("/api/delete/:id", controller.delete);

route.post('/api/updatebook/:id', async (req, res) => {
    const _id = req.params.id
    try {
        const data = await Bookdb.findOneAndReplace({ _id }, req.body)
        res.redirect('/')
    } catch (error) {
        res.send("error occured try again")

    }
})


module.exports = route;
