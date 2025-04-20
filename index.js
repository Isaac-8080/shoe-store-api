const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();

const PORT = 6030;
const Router = require('./routes/shoe_route');

app.use(express.json());

app.use('/api/shoes', Router);

// app.use('/api/shoes', );

mongoose.connect("mongodb+srv://isaacmanuopoku:Iwillworshipgod1234@devcluster.37fjkm0.mongodb.net/?retryWrites=true&w=majority&appName=DevCluster")
.then(() => {
  app.listen(PORT, () => {
    console.log("connect to database");
    console.log(`server is running on http://127.1.1.0${PORT}`)
  })
})
.catch((err) => console.log('can not connect to db', err)
)
