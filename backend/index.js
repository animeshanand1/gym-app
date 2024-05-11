const express = require('express');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('Signup successful');
})
app.get('/',(req,res)=>{
    res.send('Hello World')
})
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})