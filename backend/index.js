const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const { registerUser,loginController } = require('./Authorization/Controller/SignupController');

const app = express();
const port = 5000;

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded bodies
app.use(cors()); // Enable Cross-Origin Resource Sharing

// MongoDB Connection
const connection_url = 'mongodb://127.0.0.1:27017/gym';
mongoose.connect(connection_url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log('Database connected');
})
.catch((error) => {
    console.error('Error connecting to database:', error.message);
});

// Routes
app.post('/signup', registerUser);
app.post('/login', loginController);
app.get('/', (req, res) => {
    res.send('Hello World');
});

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
