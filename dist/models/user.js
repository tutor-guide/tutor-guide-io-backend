"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModel = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var Schema = mongoose_1.default.Schema;
var UserSchema = new Schema({
    username: { type: String, required: true, max_length: 30 },
    email: { type: String, required: true },
    password: { type: String, required: true, min_length: 8 },
});
var UserModel = mongoose_1.default.model("User", UserSchema);
exports.UserModel = UserModel;
