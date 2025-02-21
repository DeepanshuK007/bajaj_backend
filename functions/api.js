const express = require('express');
const serverless = require('serverless-http');
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

app.post('/bfhl', (req, res) => {
	// Same code as in index.js
});

app.get('/bfhl', (req, res) => {
	// Same code as in index.js
});

module.exports.handler = serverless(app);
