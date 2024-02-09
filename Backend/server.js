"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv").config();
const express_1 = __importDefault(require("express"));
// import mongoose from 'mongoose'
const accessories_json_1 = __importDefault(require("./public/api/accessories.json"));
const phones_json_1 = __importDefault(require("./public/api/phones.json"));
const products_json_1 = __importDefault(require("./public/api/products.json"));
const tablets_json_1 = __importDefault(require("./public/api/tablets.json"));
const app = (0, express_1.default)();
// app.use(express.json())
// mongoose.connect(process.env.DB_URL as string)
// mongoose.connection.on('connected', () => console.log("Mongoose connected"))
app.get("/", (req, res) => {
    res.send("hello");
});
app.get("/accessories", (req, res) => {
    res.send(accessories_json_1.default);
});
app.get("/phones", (req, res) => {
    res.send(phones_json_1.default);
});
app.get("/products", (req, res) => {
    res.send(products_json_1.default);
});
app.get("/tablets", (req, res) => {
    res.send(tablets_json_1.default);
});
app.listen(process.env.PORT || 3000, () => console.log("Server started"));
