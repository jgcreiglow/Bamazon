var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "",
    database: "bamazon_customerDB"
});

//query that returns all inventory
connection.query("SELECT * FROM bam_customer", function (err, res) {
    if (err) throw err;
    for (var i = 0; i < res.length; i++) {
        console.log(res[i].item_id + " | " + res[i].product_name + " | " + res[i].department_name + " | " + res[i].price + " | " + res[i].stock_quantity);
        console.log("----------------------------------------------");
  
    }
    purchase();
});

function purchase() {
    inquirer.prompt([
        {
            type: "input",
            message: " \n Please enter the ID number of the item you would like to buy\n ",
            name: "id"
        },
        {
            type: "input",
            message: " Please enter the number of  items you would like to buy\n ",
            name: "quantity"
        }
    ])
        .then(function () {
            inventory(purchase.quantity, inquirer.id)
        });


};

function inventory(number, id) {
    connection.query("SELECT stock_quantity FROM bam_customer Where ?", [{ item_id: id }], function (err, res) {
        stock = parseInt(res.stock_quantity);
        if (stock >=purchase.quantity) {
            console.log("your order has been placed. Please check your email for shipping information");
        } else if (stock < purchase.quantity) {
            console.log("insufficient stock. Please check again soon");
        } else {
            console.log("error");
        }
        
    });
    
};

