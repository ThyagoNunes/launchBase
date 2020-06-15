const express = require('express')
const nunjucks = require('nunjucks')

const server = express()
const home = require("./home")
const about = require("./about")
const recipes = require("./recipes")

server.use(express.static("public"))
server.set("view engine", "njk")

nunjucks.configure("views", {
    express: server,
    autoescape: false,
    noCache: true,
})

server.get('/', function(req, res){
    return res.render("home", { home : home});
})

server.get("/about", function(req, res){
    return res.render('about', { about : about});
})

server.get("/recipes", function(req, res){
    
    return res.render("recipes", { recipes })
})

  server.get("/recipes/:index", function (req, res) {
    const recipes = [...]; // Array de receitas carregadas do data.js
    const recipeIndex = req.params.index;
   
    console.log(receipts[recipeIndex]);
  })  

server.listen(process.env.PORT || 3000) 


/* server.get("/recipe", function(req, res){
  const id = req.query.id

  const recipe = recipes.find(function(recipe){
    return recipe.id == id
  })

  if(!recipe) { 
    return res.send("recipe not found")
  }

  return res.render("recipe", { recipes : recipe })
}) */