const express = require("express");
const { create, get } = require("../controllers/male_shoes_controller");

const maleShoeRoute = express.Router();

maleShoeRoute.post('/create', create);
maleShoeRoute.get('/get', get);

module.exports = maleShoeRoute;