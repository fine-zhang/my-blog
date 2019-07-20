var visitorDao = require("../dao/visitorDao")
var visitorService = require("../service/visitorService")
var respUtil = require("../util/respUtil")
var url = require("url")

var path = new Map;

function getVisitor(request,response) {
    var params = url.parse(request.url,true).query
    visitorDao.getVisitor(params.email,function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","修改成功",result));
        response.end();
    });
}

function insertVisitor(request,response) {
    var params = url.parse(request.url,true).query
    if(params.code === '749813'){
        visitorDao.insertVisitor(params.email,function(result) {
            response.writeHead(200);
            response.write(respUtil.writeResult("Mailbox has been validated successfully"));
            response.end();
        });
    }
}

function sendEmail(request,response){
    var params = url.parse(request.url,true).query
    visitorService.sendEmail(params.name,params.email);
    response.end();
}


path.set("/getVisitor",getVisitor);
path.set("/insertVisitor",insertVisitor);
path.set("/sendEmail",sendEmail);

module.exports.path = path;