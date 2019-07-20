var tagsDao = require("../dao/tagsDao")
var respUtil = require("../util/respUtil")

var path = new Map;

function getTags(request,response) {
    tagsDao.getTags(function(result) {
        response.writeHead(200);
        response.write(respUtil.writeResult("success","添加成功",result));
        response.end();
    });
}

path.set("/getTags",getTags);

module.exports.path = path;