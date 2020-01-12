const express = require("express");

const mealsRouter = express.Router();

mealsRouter.get('/', (req, res) => {
  connection.query('SELECT * from meals', (err, results, fields) => {
    if(err) {
      return res.send(err);
    }
    
    res.json(results);
  });
});

class Meal {
  constructor(mealObj){
    if(!mealObj.title)
    throw "Meals need to have title";
    else
    this.title = mealObj.title;
  }
}

mealsRouter.post('/', (req, res) => {
  // let meal;
  // console.log(req.body);
  // try{
  //     meal = new Meal(req.body);
  // } catch (e) {
  //     return res.json({
  //         error: e
  //     });
  // }
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

module.exports = mealsRouter;