import { Router } from "express";
import { handleGenerateUrlId, handleRedirectUrl } from "../controllers/url.controller.js";

export const urlRouter = Router();

urlRouter.route("/url").post(handleGenerateUrlId);

urlRouter.route("/:shortId").get(handleRedirectUrl);