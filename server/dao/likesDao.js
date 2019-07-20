var dbutil = require("./dbutil");

function addLikes(id, success) {
    var updatedSql = "update blog set likes = likes + 1 where id = ?";
    var params = [id];

    var connection = dbutil.createConnection();
    connection.connect();
    connection.query(updatedSql, params, function (error, result) {
        if (error == null) {
            success(result);
        } else {
            console.log(error);
        }
    });

    connection.end();
}

module.exports.addLikes = addLikes;