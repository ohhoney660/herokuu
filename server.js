// server.js
const express = require('express');
const path = require('path');
const app = express();
// Run the app by serving the static files
// in the dist directory
app.use(express.static(__dirname + './dist/herokuu'));
// Start the app by listening on the default
// Heroku port
app.get('/', (req, res) => {
    res.send(path.join(__dirname, '/dist/herokuuindex.html'))
})
app.listen(process.env.PORT || 8080, () => {
    console.log('app started at port:', process.env.PORT );
});