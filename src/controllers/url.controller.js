import { nanoid } from "nanoid";
import { Url } from "../models/url.model.js";

const handleGenerateUrlId = async (req, res) => {
  const { url } = req.body;

  if (!url) {
    res.status(400).json({
      error: "Url is required!",
    });
  }
  const shortId = nanoid(8);
  await Url.create({
    shortId,
    redirect_url: url,
  });

  return res.status(201).json({
    shortid: shortId,
    url: `${process.env.BASE_URL}/${shortId}`,
  });
};

const handleRedirectUrl = async (req, res) => {
  const {shortId} = req.params ;
  if(!shortId){
    res.status(400).json({
      error: "ShortId is required!",
    });
  };

  const redirect_data = await Url.findOneAndUpdate(
    { shortId: shortId },
    { $push: { visit_history: { timestamp: Date.now() } } },
    { new: true }
  );

  if (!redirect_data) {
    return res.status(404).json({
      error: "ShortId not found!",
    });
  }

  return res.redirect(redirect_data.redirect_url);
};

const handleStats = async (req,res)=>{
  const {shortId} = req.params ;
  if(!shortId){
    res.status(400).json({
      error: "ShortId is required!",
    });
  };

  const redirect_data = await Url.findOne({shortId:shortId});
  if (!redirect_data) {
    return res.status(404).json({
      error: "ShortId not found!",
    });
  }
  return res.status(200).json({
    shortId:redirect_data.shortId,
    redirect_url:redirect_data.redirect_url,
    visit_count:redirect_data.visit_history.length,
    visit_history:redirect_data.visit_history
  });
  
};

export { handleGenerateUrlId,handleRedirectUrl,handleStats };
