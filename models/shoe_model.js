// const { default: mongoose } = require("mongoose");

// const Schema = mongoose.Schema;

// const shoeModel = new Schema({
//   category: { type: String, required: true },
//   brand: { type: String, required: true },
//   price: { type: Number, required: true },
//   size: { type: Number, required: true }
// });

// module.exports = mongoose.model('Shoe', shoeModel);

const mongoose = require('mongoose');
const { Schema } = mongoose;

const shoeSchema = new Schema({
  name: { type: String, required: true },
  price: { type: Number, required: true },
  // … any other existing fields …

  // add a reference to zero or one MaleShoe
  maleShoe: {
    type: Schema.Types.ObjectId,
    ref: 'MaleShoe',
    default: null
  }
}, { timestamps: true });

module.exports = mongoose.model('Shoe', shoeSchema);
