var dbutil = require("./dbutil");

function getArticle(success) {
    var querySql = "select * from blog"
    var params = [];

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

function getArticleByTag(type, success) {
    if (type === 'undefined') {
        var querySql = "select * from blog"
    } else {
        var querySql = "select * from blog where tag = ?"
    }
    var params = [type];

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

function getArticleById(id, success) {
    var querySql = "select * from blog where id = ?";
    var params = [id];

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

function getHotlist(success) {
    var querySql = "select title, views, tag, id, ctime from blog order by views desc  limit 0, 6"
    var params = [];

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



module.exports.getArticle = getArticle;
module.exports.getArticleByTag = getArticleByTag;
module.exports.getArticleById = getArticleById;
module.exports.getHotlist = getHotlist;