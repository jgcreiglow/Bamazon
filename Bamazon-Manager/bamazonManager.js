var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_managerDB"
});

connection.query("SELECT * FROM manager", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].id + " | " + res[i].question + " | " + res[i].answer);
    }
    console.log("-----------------------------------");
});
connection.end();
