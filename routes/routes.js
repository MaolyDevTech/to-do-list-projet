const routes = require("express").Router();
const TaskController = require("../controller/TaksController");

routes.get("/", TaskController.getAll);

module.exports = routes;
