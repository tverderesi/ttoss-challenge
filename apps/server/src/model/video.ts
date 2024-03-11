import { Document, Schema, model } from "mongoose";
export interface Video {
  title: string;
  url: string;
  src: string;
  rating?: number;
}

export interface VideoModel extends Video, Document {}

const videoSchema = new Schema<VideoModel>(
  {
    id: { type: String },
    title: { type: String, required: true },
    url: { type: String, required: true },
    src: { type: String, required: true },
    rating: { type: Number, default: 1000, required: true },
  },
  {
    timestamps: true,
  }
);

videoSchema.pre("save", function () {
  this.id = this._id.toString();
});

export const VideoModel = model<VideoModel>("Video", videoSchema);
