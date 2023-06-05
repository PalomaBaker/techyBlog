const express = require('express');
const apiRoutes = require('./routes/apiRoutes');
const viewRoutes = require('./routes/viewRoutes');

const app = express();
const PORT = 3000;

// Middleware and other server configurations

// Attach API routes under /api path
app.use('/api', apiRoutes);

// Attach view routes under root path /
app.use('/', viewRoutes);

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
