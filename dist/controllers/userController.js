"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User = require("../models/user");
const asyncHandler = require("express-async-handler");
exports.user_list = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User List");
});
exports.user_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not Implemented: User Detail ${req.params.id}`);
});
exports.user_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User Create Get");
});
exports.user_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User Create POST");
});
exports.user_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User delete GET");
});
exports.user_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User delete POST");
});
exports.user_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User Update GET");
});
exports.user_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: User Update POST");
});
