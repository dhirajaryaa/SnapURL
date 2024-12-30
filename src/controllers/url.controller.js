import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

export const handleGenerateUrlId = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({
      error: "Url is required!",
    });
  }
  const shortId = nanoid(8);
  await Url.create({
    shortId,
   redirect_url:url
  });

  return res.status(201).json({
    shortid: shortId,
    url: `${process.env.BASE_URL}/${shortId}`,
  });
};
