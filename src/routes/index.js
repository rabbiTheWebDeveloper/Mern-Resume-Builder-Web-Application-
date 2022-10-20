//External import
const routes = require("express").Router();

//Internal Import
const AuthRoutes = require("./AuthRoutes");
const UserRoutes = require("./UserRoutes");
const AdminRoutes = require("./AdminRoutes");

//Auth Routes
routes.use("/Auth", AuthRoutes);

//User Routes
routes.use("/User", UserRoutes);

//User Routes
routes.use("/Admin", AdminRoutes);

module.exports = routes;
