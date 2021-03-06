const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express()
const about = require('./data')    /* < ASSIM  */

server.set("view engine",".njk")
server.use(express.static("public"))

nunjucks.configure('views',{
    express:server,
    autoescape: false
})

server.get('/', function(req, res){

    return res.render("about", { about } )      /* < ASSIM  */
})

server.use(function(req, res) {
    res.status(404).render("not-found");
  });

server.listen(process.env.PORT || 3000)

 





server.get('/', function(req, res){

    const about  = {
        links: [
          { name: "starter", url: "https://skylab.rocketseat.com.br/static/64c237ccff807c054339a62d53b4b402.svg", modules: "5 MODULES", price: "FREE" },
          { name: "launchebase", url: "https://skylab.rocketseat.com.br/static/0828532024cb46921a6b5e941f8d788d.svg", modules: "6 MODULES", price: "PAYD" },
          { name: "gostack", url: "https://skylab.rocketseat.com.br/static/83a178a0653dab1d55e2ed7946465975.svg", modules: "7 MODULES", price: "PAYD" },
        ]
      } 

    return res.render("about", { about } )
})




