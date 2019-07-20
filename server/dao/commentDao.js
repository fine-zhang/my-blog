var dbutil = require("./dbutil");

function insertComment(blogId,parent,parentname,username,email,comment,ctime,success){
    var insertSql = "insert into comments (`blog_id`,`parent`,`parentname`,`username`,`email`,`comment`,`ctime`) values (?,?,?,?,?,?,?)"
    var params = [blogId,parent,parentname,username,email,comment,ctime];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(insertSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });

    connection.end();
}

function getComment(blogId, success){
    var querySql = "select * from comments where blog_id = ?";
    var params = [blogId];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });

    connection.end();
}

module.exports.insertComment = insertComment
module.exports.getComment = getComment