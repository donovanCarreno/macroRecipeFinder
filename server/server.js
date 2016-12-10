const express = require('express')
const https = require('https')
const bodyParser = require('body-parser')
const key = ''
const app = express()

function getRecipes(req, res, next) {
  const { carbs, fat, protein } = req.query
  const root = 'spoonacular-recipe-food-nutrition-v1.p.mashape.com';
	const queryString = `/recipes/findByNutrients?maxcarbs=${carbs * 1.1}&maxfat=${fat * 1.1}&maxprotein=${protein * 1.1}&minCarbs=${carbs * 0.8}&minfat=${fat * 0.8}&minProtein=${protein * 0.8}&random=true`;
  const options = {
    host: root,
    path: queryString,
    headers: {
      'X-Mashape-Key': key
    }
  }

  https.get(options, (response) => {
    let body = ''

    response.on('data', (data) => {
      body += data
    })

    response.on('end', () => {
      req.body.recipes = JSON.parse(body)
      return next()
    })
  })
}

app.use(express.static(__dirname + '/../public'))
app.use(bodyParser.json())

app.get('/recipes', getRecipes, (req, res) => {
  res.send(req.body.recipes)
})

module.exports = app
