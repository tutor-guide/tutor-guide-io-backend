"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
router.use((req, res, next) => {
    console.log('this is case router');
    next();
});
router.get('/all', (req, res) => {
    res.send('all cases');
});
