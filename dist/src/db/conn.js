"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conn = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const connectionString = process.env.ATLAS_URI || "";
mongoose_1.default.set("strictQuery", false);
async function conn() {
    await mongoose_1.default.connect(connectionString);
}
exports.conn = conn;
