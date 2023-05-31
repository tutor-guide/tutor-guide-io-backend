"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Case = require("../models/case");
const asyncHandler = require('express-async-handler');
exports.index = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: Home Page");
});
exports.case_list = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case List");
});
exports.case_detail = asyncHandler(async (req, res, next) => {
    res.send(`Not Implemented: case Detail: ${req.params.id}`);
});
exports.case_create_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case Create Get");
});
exports.case_create_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case Create POST");
});
exports.case_delete_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case delete GET");
});
exports.case_delete_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case delete POST");
});
exports.case_update_get = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case Update GET");
});
exports.case_update_post = asyncHandler(async (req, res, next) => {
    res.send("Not Implemented: case Update POST");
});
