import { Router } from "express";
const router = Router();

import { find } from "../schemas/comment.js";
import Post from "../schemas/post.js";
// 댓글 생성
router.get("/comments", async (req, res) => {
  const comments = await find({});
  const postIds = comments.map((comment) => comment.postId);

  const post = await Post.find({ postId: postIds });

  const results = comments.map((comment) => {
    return {
      post: post.find((item) => item.postId === comment.postId)
    };
  });

  res.json({
    comments: results,
  });
});


export default router;