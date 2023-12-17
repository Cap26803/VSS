// server.js
const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();
const port = 3000;

require('./src/db');

app.get('/', (req,res) => {
  res.send("Hello World!");
})

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});