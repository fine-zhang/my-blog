var dbutil = require("./dbutil");

function addViews(id, success) {
    var updatedSql = "update blog set views = views + 1 where id = ?";
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

module.exports.addViews = addViews;