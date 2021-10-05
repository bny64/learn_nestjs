"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_routes_1 = require("./cats/cats.routes");
var app = express();
var port = 8000;
app.use(express.json());
app.use(cats_routes_1.default);
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log("this is logging middleware");
    next();
});
app.use(function (req, res, next) {
    console.log("this is error middleware");
    res.send({ error: "404 not found error" });
});
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=app.js.map