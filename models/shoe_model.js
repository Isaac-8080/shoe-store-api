const { default: mongoose } = require("mongoose");

const Schema = mongoose.Schema;

const shoeModel = new Schema({
  category: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  size: { type: Number, required: true }
});

module.exports = mongoose.model('Shoe', shoeModel);