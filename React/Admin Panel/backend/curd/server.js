const express = require('express')
const bodyParser = require('body-parser')

const cors = require('cors');

const app = express()
const hostname = 'localhost';
const port = 5000

const mongoose = require('mongoose');
const dbConnection = mongoose.connect('mongodb://127.0.0.1:27017/userdata');

  if(dbConnection){
    console.log("db connected successfully");
  }

app.use(cors()) 

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})
     
require('./routes')(app)


app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})