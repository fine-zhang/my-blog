var mysql = require("mysql");

function createConnection () {
    var connection = mysql.createConnection({
        host:"94.191.61.155",
        port:"3306",
        user:"root",
        password:"123456",
        database:"my_blog"
    });
    return connection;
}

module.exports.createConnection = createConnection;