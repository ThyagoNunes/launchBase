const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));       /* CSS */

server.set("view engine", "njk");          /* SET ENGINE FOR HTML */

nunjucks.configure("views", {               /* CONFIGURE NUNJUCKS */
  express: server
});

server.get("/", function (req, res) {
  return res.render("about");               /* RENDER INDEX */
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio");
});


server.listen(5000, function () {
  console.log("Server is running");
});


/* server.get('/root', function(req, res) {
    return res.send("Hello Mr. Robot")
}) */