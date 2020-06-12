const express = require("express");
const nunjucks = require("nunjucks");

const server = express();
const videos = require("./data")

server.use(express.static("public"));       /* CSS */
server.set("view engine", "njk");          /* SET ENGINE FOR HTML */

nunjucks.configure("views", {               /* CONFIGURE NUNJUCKS */
  express: server, 
  autoescape: false,
  noCache: true,
});

server.get("/", function (req, res) {
  const about  = {
    avatar_url: "https://avatars2.githubusercontent.com/u/52137022?s=460&u=8d0b59a6e9cd17a06c5c8175c40a04e8f58be3ff&v=4",
    name: "Thyago Nunes",
    role: "Developer",
    description: "Learning how to be a FULLSTACK",
    links: [
      { name: "github", url: "https://www.github.com/thyagonunes", dir: "../icons/github2.png" },
      { name: "linkedIn", url: "https://www.linkedin.com/in/thyagonunes", dir: "../icons/linkedin2.png" },
      { name: "twitter", url: "https://www.twitter.com/thyagonunes_", dir: "../icons/twitter2.png" },
      { name: "instagram", url: "https://www.instagram.com/thyagonunes_", dir: "../icons/instagram2.png" },
    ]
  }
  return res.render("about", { about });               /* RENDER INDEX */
});

server.get("/portfolio", function (req, res) {

  return res.render("portfolio", { items: videos });
});

server.listen(process.env.PORT || 3000)

/* server.listen(3000, function () {
  console.log("Server is running");
}); */
