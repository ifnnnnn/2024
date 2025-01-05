//install: node js
//install web server package: express >npm install express
var express = require("express");
var server = express();
var bodyParser = require("body-parser");
var path = require("path");

//web root
server.use(express.static((__dirname, "NEW")));
server.use(bodyParser.json());
server.use(bodyParser.urlencoded());

var fileUpload = require("express-fileupload");
server.use(fileUpload({defCharset:'utf8', defParamCharset:'utf8'}));


var DB = require("nedb-promises");
var ShopDB = DB.create(__dirname+"/shopDB.db");
var GalleryDB = DB.create(__dirname+"/galleryDB.db");
 

/*ShopDB.insert([
    {imgSrc: "img1.jpg"},
    {imgSrc: "img2.jpg"},
    {imgSrc: "img3.jpg"},
    {imgSrc: "img5.jpg"},
 ])*/

server.get("/Shop", (req,res)=>{
      //DB
      ShopDB.find({}).then(results=>{
        if(results != null){
             res.send(results);
        }else{
            res.send("Error!");
        }
      })
})


/*GalleryDB.insert([
                {imgSrc: "img6.jpg", hoverImgSrc: 'img9.jpg', isHovered: false},
                {imgSrc: "img7.jpg", hoverImgSrc: 'img10.jpg', isHovered: false},
                {imgSrc: "img8.jpg", hoverImgSrc: 'img11.jpg', isHovered: false}
                
            ])*/

    server.get("/Gallery", (req,res)=>{
        //DB
        GalleryDB.find({}).then(results=>{
          if(results != null){
               res.send(results);
          }else{
              res.send("Error!");
          }
        })
  })

server.post("/contact_me", (req,res)=>{
     ContactDB.insert(req.body);
     res.redirect("/#contact");
})

server.listen(80, ()=>{
    console.log("Server is running at port 80.");
})
server.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/webdesign.html'));
});