require('dotenv').config();
const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

const PORT = process.env.PORT;
const DATABASE = process.env.DB_URL;

const Router = require('./routes/shoe_route');
const maleShoeRoutes = require('./routes/male_shoe_route');

app.use(express.json());

app.use('/api/shoes', Router);
app.use('/api/shoes', maleShoeRoutes);

// app.use('/api/shoes', );

mongoose.connect(DATABASE)
.then(() => {
  app.listen(PORT, () => {
    console.log("connect to database");
    console.log(`server is running on http://127.1.1.0${PORT}`)
  })
})
.catch((err) => console.log('can not connect to db', err)
)
