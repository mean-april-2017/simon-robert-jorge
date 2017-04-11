var express = require("express");
var path = require("path");
// var path = require("bodyParser");

var app = express();

app.use(express.static(path.join(__dirname, "client")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.get("/angular.js", function (request, response) {
    response.sendFile("angular.js", { root: "node_modules/angular" });
});

app.listen(3000, function () {
    console.log("App Listening on Port 3000");
});
