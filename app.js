const express = require('express');
const app = express();
const db = require('./db');
const port = 2000;
const MongoLiveUrl = "mongodb+srv://login:test12345@netflixlogin.2gsnq.mongodb.net/netflixdatalogin?retryWrites=true&w=majority";
const cors = require('cors');
app.use(cors());

const AuthController = require('./controller/authController');
app.use('/api/auth', AuthController);

app.listen(port,() => {
    console.log(`Running on port ${port}`)
})