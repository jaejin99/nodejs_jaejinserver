import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  commentId: {
    type: String,
    required: true,
    unique: true,
  },
  user: {
    type: String,
    required: true,
    unique: true,
  },
  title: {
    type: String,
  },
  createdAt: {
    type: String,
  },
});

export default mongoose.model("comment", commentSchema);
