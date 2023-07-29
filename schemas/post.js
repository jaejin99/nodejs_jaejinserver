import { Schema, model } from "mongoose";

const postSchema = new Schema({
  postId: {
    type: String,
    required: true,
    unique: true
  },
  user: {
    type: String,
    required: true,
    unique: true
  },
  title: {
    type: String
  },
  createdAt: {
    type: String
  }
});

export default model("Post", postSchema);