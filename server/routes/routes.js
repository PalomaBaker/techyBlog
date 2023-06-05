const express = require('express');
const router = express.Router();
const path = require('path');

// Route for rendering the homepage
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

// Route for rendering the dashboard
router.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/dashboard.html'));
});

// Route for rendering the individual blog post page
router.get('/post/:id', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/post.html'));
});

// ... Add more routes for rendering other views (e.g., login, signup, etc.)

module.exports = router;
