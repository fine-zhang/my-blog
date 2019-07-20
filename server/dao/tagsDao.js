var dbutil = require("./dbutil");

function getTags(success) {
    var querySql = "select tag, type from tags";
    var params = [];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(querySql,params,function(error,result) {
        if(error == null){
            success(result);
        } else {
            console.log(error);
        }
    });

    connection.end();
}

module.exports.getTags = getTags;