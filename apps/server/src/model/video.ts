import { Document, Schema, model } from "mongoose";
import { Video } from "@/seed/videos";

export interface VideoModel extends Video, Document {}

const videoSchema = new Schema<VideoModel>(
  {
    title: { type: String, required: true },
    url: { type: String, required: true },
    src: { type: String, required: true },
    rating: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

export const VideoModel = model<VideoModel>("Video", videoSchema);
