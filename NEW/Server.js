//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");

//web root
server.use(express.static(__dirname+"/NEW"));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var ShopDB = DB.create(__dirname+"/NEW/vue.js");

    

// ProfolioDB.insert([
//     { modal: "#portfolioModal1", imgSrc: "modalroundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" },
//     { modal: "#portfolioModal1", imgSrc: "roundicons.png", heading: "Round Icons", text: "Graphic Design" },
//     { modal: "#portfolioModal2", imgSrc: "startup-framework.png", heading: "Startup Framework", text: "Website Design" },
//     { modal: "#portfolioModal3", imgSrc: "treehouse.png", heading: "Treehouse", text: "Website Design" }
// ])

server.get("/services", (req, res)=>{
    //DB find
    var Services=[
        {icon: "fa-shopping-cart", heading:"E-Commerce", text:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."},
        {icon: "fa-laptop", heading:"Responsive Design", text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit."}
    ];
    res.send(Services);
});

server.get("/profolio", (req,res)=>{
      //DB
      ProfolioDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})


server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})