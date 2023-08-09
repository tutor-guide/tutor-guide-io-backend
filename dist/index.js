"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./loadEnvironment.js");
// this project refers to https://www.mongodb.com/languages/express-mongodb-rest-api-tutorial
var express_1 = __importDefault(require("express"));
var conn_js_1 = require("./db/conn.js");
var indexRouter = require("./routes/index");
// var usersRouter = require("./routes/users")
var adminRouter = require("./routes/admin");
var PORT = process.env.PORT || 3001;
var app = (0, express_1.default)();
app.use("/", indexRouter);
// app.use("/users", usersRouter)
app.use("/admin", adminRouter);
// app.use("/cases", cases)
app.listen(PORT, function () {
    console.log("Server listening on ".concat(PORT));
});
(0, conn_js_1.conn)();
