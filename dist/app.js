"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var port = 8000;
var data = [1, 2, 3, 4, 5];
app.get("/", function (req, res) {
    console.log(req);
    res.send("hello world!");
});
app.get("/data", function (req, res) {
    console.log(req);
    res.send({ cats: app_model_1.Cat });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map