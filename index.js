const express = require('express');
const dotenv = require('dotenv');
const authMiddleware = require('./middleware/auth');
const menuRoutes = require('./routes/menu');

dotenv.config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(authMiddleware); // All routes use simple auth
app.use('/api/menu', menuRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

