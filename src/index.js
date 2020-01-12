require('./environment');
const express = require("express");
const bodyParser = require('body-parser');

const connection = require('./connection');
const mealsRouter = require('./mealsRouter');

const { PORT } = process.env;

const app = express();

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/meals', mealsRouter);

app.listen(PORT, err => {
  if(err)
    console.log(`Error starting server: ${err}`);
  console.log(`Server started at ${PORT}`);
});
