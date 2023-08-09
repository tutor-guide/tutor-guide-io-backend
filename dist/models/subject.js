"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SubjectModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var SubjectSchema = new Schema({
    english_name: { type: String, required: true },
    chinese_name: { type: String, required: true },
});
var SubjectModel = mongoose_1.default.model("Subject", SubjectSchema);
exports.SubjectModel = SubjectModel;
