"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Webhook = void 0;
const express_1 = __importDefault(require("express"));
const v1_1 = require("firebase-functions/v1");
const runTime_1 = require("./config/runTime");
const routes_1 = require("./routes");
const app = express_1.default();
app.use(express_1.default.json());
app.use(routes_1.routes);
exports.Webhook = v1_1.runWith(runTime_1.runtimeOpts).https.onRequest(app);
//# sourceMappingURL=webhook.js.map