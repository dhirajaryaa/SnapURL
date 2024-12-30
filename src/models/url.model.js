import mongoose from "mongoose";

const urlSchema = new mongoose.Schema(
  {
    shortId: {
      type: String,
      unique: true,
    },
    redirect_url: {
      type: String,
    },
    visit_history: [
      {
        timestamp: {
          type: Number,
        },
      },
    ],
  },
  { timestamps: true }
);

export const Url = mongoose.model("Url", urlSchema);
