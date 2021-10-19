"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const marvel_controller_1 = require("./../controller/marvel.controller");
const express_1 = require("express");
exports.routes = express_1.Router();
exports.routes.post("/getVerify", marvel_controller_1.getVerify);
//# sourceMappingURL=index.js.map