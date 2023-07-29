import { Router } from 'express';
const router = Router();
const posts = [
    {
    "postId": "62d6d12cd88cadd496a9e54e",      
    "user": "Developer",      
    "title": "안녕하세요",      
    "createdAt": "2022-07-19T15:43:40.266Z"
    },
    {
    "postId": "62d6cc66e28b7aff02e82954",      
    "user": "Developer",      
    "title": "안녕하세요",      
    "createdAt": "2022-07-19T15:23:18.433Z"
    }
]

//게시글 API
//게시글 조회
router.get("/posts", (req, res) => {
	res.json({ posts: posts });
});
//게시글 상세조회
router.get("/posts/:postId", (req, res) => {
	const { postId } = req.params;
	const [detail] = posts.filter((posts) => posts.postId === String(postId));
	res.json({ detail });
});
//게시글 수정
router.put("/posts/:_postId", async (req, res) => {
  const { postId } = req.params;
  const existsPosts = await Post.find({ postId: String(postId) });
  if (existsPosts.length) {
    await Post.updateOne({ postId: String(postId) } );
  }
//게시글 삭제
router.delete("/posts/:_postId", async (req, res) => {
  const { postId } = req.params;
  const existsPosts = await Post.find({ postId });
  if (existsPosts.length > 0) {
    await Post.deleteOne({ postId });
  }
  
  res.json({ result: "success" });
});
  
  res.json({ success: true });
})
//게시글 생성
import Post from "../schemas/post";
router.post("/post", async (req, res) => {
	const { postId, user, title, createdAt } = req.body;

  const post = await Post.find({ postId });
  if (post.length) {
    return res.status(400).json({ success: false, errorMessage: "이미 있는 데이터입니다." });
  }

  const createdPost = await Post.create({ postId, user, title, createdAt });

  res.json({ post: createdPost });
});

//댓글 기능
//목록 조회
import { find, create, updateOne, deleteOne } from "../schemas/comment";
router.post("/posts/:_postId/comments", async (req, res) => {
  const { postId } = req.params;

  const existsComments = await find({ postId: String(postId) });
  if (existsComments.length) {
    return res.json({ success: false, errorMessage: "이미 게시글에 존재하는 댓글입니다." });
  }

  await create({ postId: String(postId) });

  res.json({ result: "success" });
});
//댓글 수정
router.put("/posts/:_postId/comments/:_commentId", async (req, res) => {
  const { postId } = req.params;

  const existsComments = await find({ postId: String(postId) });
  if (existsComments.length) {
    await updateOne({ postId: String(postId) } );
  }

  res.json({ success: true });
})
//댓글 삭제
router.delete("/posts/:_postId/comments/:_commentId", async (req, res) => {
  const { postId } = req.params;

  const existsComments = await find({ postId });
  if (existsComments.length > 0) {
    await deleteOne({ postId });
  }

  res.json({ result: "success" });
});

  export default router;