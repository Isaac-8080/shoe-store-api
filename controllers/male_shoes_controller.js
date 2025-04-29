const express = require('express');
const router = express.Router();
const MaleShoe = require('../models/male_shoe');

// POST /api/male-shoes
const create = async (req, res) => {
  try {
    const ms = new MaleShoe(req.body);
    const saved = await ms.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// GET /api/male-shoes
const get = async (req, res) => {
  const list = await MaleShoe.find();
  res.json(list);
};

module.exports = { create, get }