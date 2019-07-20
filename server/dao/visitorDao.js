var dbutil = require("./dbutil");

function getVisitor(email,success) {
    var querySql = "select * from visitor where email= ?"
    var params = [email];

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

function insertVisitor(email,success){
    var insertSql = "INSERT INTO visitor (`email`) VALUES (?)"
    var params = [email];

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

module.exports.getVisitor = getVisitor;
module.exports.insertVisitor = insertVisitor;