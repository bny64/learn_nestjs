"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_routes_1 = require("./cats/cats.routes");
var Server = (function () {
    function Server() {
        this.port = 8000;
        var app = express();
        this.app = app;
    }
    Server.prototype.setRoutes = function () {
        this.app.use(cats_routes_1.default);
    };
    Server.prototype.setMiddleware = function () {
        this.app.use(function (req, res, next) {
            console.log(req.rawHeaders[1]);
            console.log("this is logging middleware");
            next();
        });
        this.app.use(express.json());
        this.setRoutes();
        this.app.use(function (req, res, next) {
            console.log("this is error middleware");
            res.send({ error: "404 not found error" });
        });
    };
    Server.prototype.listen = function () {
        var _this = this;
        this.setMiddleware();
        this.app.listen(this.port, function () {
            console.log("Example app listening at http://localhost:" + _this.port);
        });
    };
    return Server;
}());
function init() {
    var server = new Server();
    server.listen();
}
init();
//# sourceMappingURL=app.js.map