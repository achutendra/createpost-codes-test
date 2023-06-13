import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  title: { type: String, required: true },
  body: { type: String, required: true },
  userId: { type: Number, required: true },
});

const Post = mongoose.model("Post", postSchema);

export default Post;
