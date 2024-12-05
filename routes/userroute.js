const express = require("express");
const user_route = express();
// const session = require('express-session')
const nocache = require("nocache");
user_route.use(nocache());

user_route.use(express.json());
-user_route.use(express.urlencoded({ extended: true }));

user_route.set("view engine", "ejs");
user_route.set("views", "./views/users");

const usercontorller = require("../controller/usercontroller");

user_route.get("/", usercontorller.landingpage);

module.exports = user_route;
