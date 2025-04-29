const express = require("express");
const { createShoe, getShoe, updateShoe, getShoeByCategory, deleteShoe } = require("../controllers/shoe__store__controller");

const Router = express.Router();

Router.post('/create-shoe', createShoe);
Router.get('/get-shoe', getShoe);
Router.get('/get-shoe/:category', getShoeByCategory);
Router.put('/edit-shoe/:id', updateShoe);
Router.delete('/delete-shoe/:id', deleteShoe);

module.exports = Router;