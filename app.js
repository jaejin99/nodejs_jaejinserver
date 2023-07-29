import express, { json } from 'express';
const app = express();
const port = 3000;
import postsRouter from "./routes/posts";
import commentsRouter from "./routes/comments";

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

import connect from "./schemas";
connect();

app.use(json());

app.use("/api", [postsRouter, commentsRouter]);
