const users = []; // In-memory user data store

// Function to create a new user using the input credentials
const createUser = (req, res) => {
    const { name, mobile, email, password, role } = req.body;
    if (!name || !email || !password || !role) {
        return res.status(400).json({ message: "Missing required fields" });
    }
    const userExists = users.find(user => user.email === email);
    if (userExists) {
        return res.status(400).json({ message: "User already exists" });
    }
    const newUser = { id: users.length + 1, name, mobile, email, password, role };
    users.push(newUser);
    return res.status(201).json({ message: "User created successfully", user: newUser });
};

// Function for user login
const loginUser = (req, res) => {
    const { email, password } = req.body;
    const user = users.find(user => user.email === email && user.password === password);
    if (!user) {
        return res.status(401).json({ message: 'Invalid credentials' });
    }
    return res.status(200).json({ message: 'Login successful', user });
};

module.exports = { createUser, loginUser, users };