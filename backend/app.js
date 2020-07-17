// modules importation
const express = require('express');
const app = express();
const cors = require('cors');

// settings
app.set('port', process.env.PORT || 5000);

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use(require('./routes/auth'));

module.exports = app;