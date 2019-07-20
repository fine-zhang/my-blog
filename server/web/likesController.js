var likesDao = require("../dao/likesDao")
var respUtil = require("../util/respUtil")
var url = require("url")

var path = new Map;

function addLikes(request,response) {
    var params = url.parse(request.url,true).query
    likesDao.addLikes(parseInt(params.id),function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","修改成功",result));
        response.end();
    });
}


path.set("/addLikes",addLikes);

module.exports.path = path;