const express = require('express');
const cors = require('cors'); // Import cors
const app = express();

// Enable CORS for all origins (for development)
app.use(cors()); // Use cors middleware

app.use(express.json());
const PORT = process.env.PORT || 5000;

const userRoutes = require('./routes/userRoutes'); // Import user routes
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Book Exchange Portal');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
