const Shoe = require("../models/shoe_model");

const createShoe = async (req, res) => {
  
  const { category, brand, price, size } = req.body;

  if (!category || !brand || !price || !size)
    return res.status(400).json({ msg: `bad request, all feilds are required` })

  const newShoe = Shoe({
    // id : storeDb.length + 1,
    category, 
    brand, 
    price, 
    size
  })

  await newShoe.save();

  return res.status(200).json({ msg: `shoe added!`, shoeDetail : newShoe });

}

const getShoe = async (req, res) => {

  try {

    const shoes = await Shoe.find();

    if (!shoes) 
      return res.status(404).json({msg: "shoes not found"});
      
      return res.status(200).json(shoes);

  } catch (error) {
    
    console.log("sorry an error occured", error);

  }

}

const getShoeByCategory = async (req, res) => {

  const category = req.params.category;
  
  const shoes = await Shoe.find({ category });

  if (!shoes)
    return res.status(404).json({msg: `no shoe with the category "${category}" found`});

    return res.status(201).json(shoes);
}

const updateShoe = async (req, res) => {

  const { id } = req.params;

  const { category, brand, price, size } = req.body;

  const newShoeDetails = await Shoe.findByIdAndUpdate(id, {
    category, brand, price, size
  })

  if (!newShoeDetails)
    return res.status(404).json({msg: "shoe not found"});
  
    return res.status(200).json({msg: `shoe updated`, newShoeDetails});

}

module.exports = { createShoe, getShoe, getShoeByCategory, updateShoe }