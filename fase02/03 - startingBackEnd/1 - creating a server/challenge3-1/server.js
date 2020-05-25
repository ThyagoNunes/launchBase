const express = require ('express')
const nunjucks = require ('nunjucks')

const server = express()

server.set("view engine",".njk")
server.use(express.static("public"))

nunjucks.configure('views',{
    express:server
})

server.get('/', function(req, res){
    return res.render("about")
})

server.listen(3000)