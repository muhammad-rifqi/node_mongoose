require('dotenv').config();
const express = require('express');
const app = express();
const mongooes = require('mongoose');
const apis = require('./routes/news');

mongooes.connect(process.env.URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongooes.connection;
db.on('error', (error) => { console.error(error) })
db.once('open', () => { console.log("Success connect") })
app.use(express.json())
app.use('/api', apis)

app.listen(3000, () => console.log("Started")); 