const express = require('express');
const cors = require('cors');
const router = require('./router');
const app = express();

//DB Connection
const conn = require('./db/conn');

conn();

app.use(express.json());
app.use(cors());
app.use(router);


app.listen(3000, function() {
    console.log("Servidor online")
});

module.exports = app;
