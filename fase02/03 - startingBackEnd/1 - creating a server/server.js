const express = require("express");
const nunjucks = require("nunjucks");

const server = express();

server.use(express.static("public"));       /* CSS */

server.set("view engine", "html");          /* ENGINE FOR HTML */

nunjucks.configure("views", {               /* CONFIGURE NUNJUCKS */
  express: server,
});

server.get("/", function (req, res) {
  return res.render("index");               /* RENDER INDEX */
});

server.get("/about", function (req, res) {
  return res.render("about");
});

server.get("/portfolio", function (req, res) {
  return res.render("portfolio");
});

/* server.get('/root', function(req, res) {
    return res.send("Hello Mr. Robot")
}) */

server.listen(3333, function () {
  console.log("Server is running");
});
