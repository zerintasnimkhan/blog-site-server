const {
  createPost,
  fetchPosts,
  fetchPostById,
} = require("../models/form.model");

module.exports.addPost = async (req, res) => {
  try {
    console.log(req.body);
    const { title, description, date, tags } = req.body;

    if (!title || !description || !date) {
      return res.status(400).json();
    }
    const data = {
      title, description, date, tags
    };

    const savedPost = await createPost(data);

    res.status(201).json({ message: "Post added", post: savedPost });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.getAllPosts = async (_req, res) => {
  try {
    const posts = await fetchPosts();
    res.status(200).json(posts);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

module.exports.getPostById = async (req, res) => {
  try {
    const post = await fetchPostById(req.params.id);
    res.status(200).json(post);
  } catch (error) {
    res.status(500).json({ error: "Server error" });
  }
};

