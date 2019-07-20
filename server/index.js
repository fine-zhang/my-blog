var express = require("express");
var globalConfig = require("./config");
var loader = require("./loader");
var cors = require('cors')
var history = require('connect-history-api-fallback');



var app = new express;

app.use(history({
    rewrites: [
        {
          from: /^\/insertVisitor.*$/,
          to: function(context) {
              return context.parsedUrl.path
          }
        }
    ]
}));

  


app.use(express.static('./public/dist'))


app.use(cors()) 




app.get("/getTags",loader.get("/getTags"));

app.get("/getArticle",loader.get("/getArticle"));
app.get("/getArticleByTag",loader.get("/getArticleByTag"));
app.get("/getArticleById",loader.get("/getArticleById"));
app.get("/getHotlist",loader.get("/getHotlist"));


app.get("/sendComment",loader.get("/sendComment"));
app.get("/getComment",loader.get("/getComment"));

app.get("/addLikes",loader.get("/addLikes"))

app.get("/addViews",loader.get("/addViews"))

app.get('/getVisitor',loader.get('/getVisitor'))
app.get('/insertVisitor',loader.get('/insertVisitor'))
app.get('/sendEmail',loader.get('/sendEmail'))



app.listen(globalConfig.port,function() {
    console.log("服务已启动")
});