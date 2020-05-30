const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./videos")
const about = require('./about')
const portfolios = require('./portfolios')

server.use(express.static("public"));      
server.set("view engine", "njk");          

nunjucks.configure("views", {              
  express: server, 
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  return res.render("about", { about });
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio", { portfolios });
});

server.get("/video", function(req, res){
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
  })

  if(!video) {
    return res.send("Video not found")
  }

  return res.render("video", { videos: video })
})


server.use(function(req, res){
  return res.status(404).render('not-found')
})

server.listen(process.env.PORT || 3000) 