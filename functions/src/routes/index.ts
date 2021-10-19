import { getVerify } from "./../controller/marvel.controller";
import { Router } from "express";

export const routes = Router();

routes.post("/getVerify", getVerify);
