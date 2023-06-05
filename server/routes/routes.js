const express = require('express');
const router = express.Router();
const Post = require('../models/post');

// GET /api/posts - Get all posts
router.get('/api/posts', async (req, res) => {
  try {
    const posts = await Post.find(); // Assuming you're using a database and a Post model
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// POST /api/posts - Create a new post
router.post('/api/posts', async (req, res) => {
  const { title, content, author } = req.body;
  try {
    const newPost = await Post.create({ title, content, author }); // Assuming you're using a database and a Post model
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// GET /api/posts/:id - Get a specific post by ID
router.get('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const post = await Post.findById(postId); // Assuming you're using a database and a Post model
    if (!post) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(post);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// PUT /api/posts/:id - Update a specific post by ID
router.put('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;
  const { title, content } = req.body;
  try {
    const updatedPost = await Post.findByIdAndUpdate(
      postId,
      { title, content },
      { new: true }
    ); // Assuming you're using a database and a Post model
    if (!updatedPost) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.json(updatedPost);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// DELETE /api/posts/:id - Delete a specific post by ID
router.delete('/api/posts/:id', async (req, res) => {
  const postId = req.params.id;
  try {
    const deletedPost = await Post.findByIdAndDelete(postId); // Assuming you're using a database and a Post model
    if (!deletedPost) {
      res.status(404).json({ error: 'Post not found' });
    } else {
      res.sendStatus(204);
    }
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
