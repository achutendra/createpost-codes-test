import Post from "../model/post.js";

// GET route to retrieve posts data
export const getPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// POST route to add a new post
export const createPost = async (req, res) => {
  try {
    const { title, body, userId } = req.body;
    const post = new Post({ title, body, userId });
    await post.save();
    res.json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// PUT route to update a post
export const updatePost = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, body, userId } = req.body;
    await Post.findByIdAndUpdate(id, { title, body, userId });
    res.json({ message: "Post updated successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};

// DELETE route to remove a post
export const deletePost = async (req, res) => {
  try {
    const { id } = req.params;
    await Post.findByIdAndDelete(id);
    res.json({ message: "Post deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
};
