var viewsDao = require("../dao/viewsDao")
var respUtil = require("../util/respUtil")
var url = require("url")

var path = new Map;

function addViews(request,response) {
    var params = url.parse(request.url,true).query
    viewsDao.addViews(parseInt(params.id),function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","修改成功",result));
        response.end();
    });
}


path.set("/addViews",addViews);

module.exports.path = path;