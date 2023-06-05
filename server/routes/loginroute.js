// Import necessary modules and dependencies
const express = require('express');
const app = express();

// Define the login route
app.post('/api/login', (req, res) => {
  // Retrieve the email and password from the request body
  const { email, password } = req.body;

  // Validate the credentials (e.g., compare with stored user data)
  if (email === 'example@example.com' && password === 'password123') {
    // Credentials are valid, generate a session or token to authenticate the user
    const token = 'generated_token_here';

    // Send a success response with the token
    res.status(200).json({ token });
  } else {
    // Credentials are invalid, send an error response
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// Start the server
app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
