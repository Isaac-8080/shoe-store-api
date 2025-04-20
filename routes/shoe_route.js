const express = require("express");
const { createShoe, getShoe, updateShoe, getShoeByCategory } = require("../controllers/shoe__store__controller");

const Router = express.Router();

Router.post('/create-shoe', createShoe);
Router.get('/get-shoe', getShoe);
Router.get('/get-shoe/:category', getShoeByCategory);
Router.put('/edit-shoe', updateShoe);
// Router.delete('/delete-shoe', deleteShoe);

module.exports = Router;