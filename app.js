// const postsBool = require("./postsBool.js");
const express = require("express");
const app = express();
const port = 3001;
const postsRouter = require("./routers/posts");

app.use(express.static('public'));


app.use("/posts", postsRouter);
// app.use("/farfalle", postsRouter);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
