const express = require("express");
const dotenv = require("dotenv");
const mysql = require('mysql');
const bodyParser = require('body-parser');

dotenv.config();

const { PORT, MYSQL_URL } = process.env;

const connection = mysql.createPool(MYSQL_URL);

const mealsRouter = express.Router();

mealsRouter.get('/', (req, res) => {
  connection.query('SELECT * from meals', (err, results, fields) => {
    if(err) {
      return res.send(err);
    }

    res.json(results);
  });
});

mealsRouter.post('/', (req, res) => {
  const meal = req.body;

  // log the meal for debugging
  console.log('meal:', meal);

  connection.query('INSERT into meals SET ?', meal, (err, results, fields) => {
    if(err) {
      return res.send(err);
    }

    res.json(results);
  });
});

const app = express();

// middleware
app.use(express.static('public'));
app.use(bodyParser.json());

app.use('/meals', mealsRouter);

app.listen(PORT, () => {
  console.log(`Server started at ${PORT}`);
  connection.getConnection(err => {
    if(err){
      console.log(`Error connecting: ${err}`);
    } else {
      console.log('Connection successful');
    }
  });
  // connection.end();
});
