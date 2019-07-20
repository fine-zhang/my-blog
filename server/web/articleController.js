var articleDao = require("../dao/articleDao")
var respUtil = require("../util/respUtil")
var url = require("url")

var path = new Map;

function getArticle(request,response) {
    articleDao.getArticle(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    });
}

function getArticleByTag(request,response) {
    var params = url.parse(request.url,true).query
    articleDao.getArticleByTag(params.type,function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    });
}

function getArticleById(request,response) {
    var params = url.parse(request.url,true).query
    articleDao.getArticleById(parseInt(params.id),function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    });
}

function getHotlist(request,response) {
    articleDao.getHotlist(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    });
}

path.set("/getArticle",getArticle);
path.set("/getArticleByTag",getArticleByTag);
path.set("/getArticleById",getArticleById);
path.set("/getHotlist",getHotlist);

module.exports.path = path;