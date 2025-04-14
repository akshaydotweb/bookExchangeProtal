// Registration Endpoints
const users = [];

const registerUser = (req, res) => {
    const { name, mobile, email, password, role } = req.body;

    // basic validation
    if (!name || !mobile || !email || !password || !role) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // check if user already exists
    const userExists = users.find(user => user.emial === email);
    if (userExists) {
        return res.status(400).json({message : "User already exists"});
    }

    // Store user data
    const newUser = {
        id: users.length + 1,
        name,
        mobile,
        email,
        password,
        role
    };
    users.push(newUser);
    res.status(201).json({ message: 'User registered successfully', user: newUser });
};

module.exports = { registerUser, users };


// Login Endpoints
const loginUser = (req, res) => {
    const { email, password } = req.body;

    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }

    res.status(200).json({ message: 'Login successful', user });
};

module.exports = { registerUser, loginUser, users };

// API routes 

const express = require('express');
const router = express.Router();
const { registerUser, loginUser } = require('../controllers/userController');

router.post('/register', registerUser);
router.post('/login', loginUser);

module.exports = router;

// Integrating the routes into the main server file
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;


// Parse JSON bodies
app.use(express.json());

// user API routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to the Book Exchange Portal');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});