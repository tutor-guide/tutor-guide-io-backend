"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Client = require("../models/client");
const asyncHandler = require('express-async-handler');
exports.client_list = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client List");
});
exports.client_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not Implemented: client Detail: ${req.params.id}`);
});
exports.client_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client Create Get");
});
exports.client_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client Create POST");
});
exports.client_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client delete GET");
});
exports.client_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client delete POST");
});
exports.client_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client Update GET");
});
exports.client_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: client Update POST");
});
