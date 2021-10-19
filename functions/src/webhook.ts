import express from "express";
import { runWith } from "firebase-functions/v1";
import { runtimeOpts } from "./config/runTime";
import { routes } from "./routes";

const app = express();

app.use(express.json());

app.use(routes);

export const Webhook = runWith(runtimeOpts).https.onRequest(app);
