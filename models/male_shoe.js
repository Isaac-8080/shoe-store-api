const mongoose = require('mongoose');
const { Schema } = mongoose;

const maleShoeSchema = new Schema({
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true
  },
  size: {
    type: Number,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('MaleShoe', maleShoeSchema);
