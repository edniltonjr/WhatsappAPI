"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
require('dotenv').config();
var app = express_1.default();
var port = process.env.PORT || 3000;
app.use('5555', function () {
    console.log('OK');
});
app.get('/', function (req, res) {
    res.json('OK');
});
