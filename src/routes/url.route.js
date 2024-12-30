import { Router } from "express";
import { handleGenerateUrlId } from "../controllers/url.controller.js";

export const urlRouter = Router();

urlRouter.route("/url").post(handleGenerateUrlId);