var commentDao = require("../dao/commentDao")
var respUtil = require("../util/respUtil")
var timeUtil = require("../util/timeUtil")
var url = require("url")

var path = new Map();

function sendComment(request,response){
    var params = url.parse(request.url,true).query;

    commentDao.insertComment(parseInt(params.id),parseInt(params.parent),params.parentname,params.username,params.email,params.content,params.ctime,function(result){
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    })

}

function getComment(request,response) {
    var params = url.parse(request.url,true).query
    commentDao.getComment(parseInt(params.id),function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","请求成功",result));
        response.end();
    });
}



path.set("/sendComment", sendComment);
path.set("/getComment", getComment);

module.exports.path = path;