const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config');

//db connection
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true },
    () => {
    console.log('Connected to db');
})

app.listen(3000);
