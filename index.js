const express = require('express');

const app = express();

const PORT = 6030;

const storeDb = [];

app.use(express.json());

app.post('/api/shoes', (req, res) => {
  
  const { category, brand, price, size } = req.body;

  if (!category || !brand || !price || !size)
    return res.status(400).json({ msg: `bad request, make sure feilds are not empty` })

  const newShoe = {
    id : storeDb.length + 1,
    category, 
    brand, 
    price, 
    size
  }

  storeDb.push(newShoe);

  return res.status(200).json({ msg: `shoe added!`, shoeDetail : storeDb });

});

app.get('/api/shoes', (req, res) => {

  return res.status(200).json({ msg: storeDb.length > 0 ? `available shoes` : 'store is empty', shoeDetail : storeDb });

})

app.listen(PORT, '127.0.0.1', () => {console.log(`server is running on http://127.1.1.0${PORT}`);
})