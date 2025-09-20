import mongoose, { modelNames, Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";


const videoSchema = new Schema(
  {
    videoFile: {
      type: String, // from cloudnary
      required: true,
    },
    thumbnail: {
      type: String, // from cloudnary url
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,//from cloudnary url 
      required: true,
    },
    views: {
        default:0,
      type: Number,
    },
    isPublished: {
        type:Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("Video", videoSchema);
