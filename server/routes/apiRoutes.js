const express = require('express');
const router = express.Router();

// Import the necessary models
const Post = require('../models/post');
const Comment = require('../models/comment');
const User = require('../models/user');

// API endpoint for fetching all posts
router.get('/posts', (req, res) => {
  Post.find({})
    .then(posts => {
      res.json(posts);
    })
    .catch(err => {
      res.status(500).json({ error: 'An error occurred while fetching the posts.' });
    });
});

// API endpoint for creating a new post
router.post('/posts', (req, res) => {
  const { title, content, userId } = req.body;

  Post.create({ title, content, userId })
    .then(newPost => {
      res.status(201).json(newPost);
    })
    .catch(err => {
      res.status(400).json({ error: 'Failed to create a new post.' });
    });
});

// API endpoint for fetching a specific post by ID
router.get('/posts/:id', (req, res) => {
  const postId = req.params.id;

  Post.findById(postId)
    .then(post => {
      if (!post) {
        return res.status(404).json({ error: 'Post not found.' });
      }

      res.json(post);
    })
    .catch(err => {
      res.status(500).json({ error: 'An error occurred while fetching the post.' });
    });
});

// API endpoint for creating a new comment for a post
router.post('/comments', (req, res) => {
  const { content, postId, userId } = req.body;

  Comment.create({ content, postId, userId })
    .then(newComment => {
      res.status(201).json(newComment);
    })
    .catch(err => {
      res.status(400).json({ error: 'Failed to create a new comment.' });
    });
});

// API endpoint for deleting a comment
router.delete('/comments/:id', (req, res) => {
  const commentId = req.params.id;

  Comment.findByIdAndDelete(commentId)
    .then(() => {
      res.sendStatus(204);
    })
    .catch(err => {
      res.status(500).json({ error: 'An error occurred while deleting the comment.' });
    });
});

// ... Add more API endpoints for other functionalities (e.g., user registration, login, etc.)

module.exports = router;
