"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Tablet = new mongoose_1.Schema({
    username: String,
});
exports.default = (0, mongoose_1.model)("accessories", Tablet);
