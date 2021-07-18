// Import / requires
const express = require('express');

// Make everything inside of public / available
const app = express();
app.use(express.static('public'));

// Routes
app.get('/', (request, response, next) => response.sendFile(__dirname + '/views/home.html'));
app.get('/about', (request, response, next) => response.sendFile(__dirname + '/views/about.html'));
app.get('/works', (request, response, next) => response.sendFile(__dirname + '/views/works.html'));

// Server started
app.listen(process.env.PORT || 3000, () => console.log('My first app listening on port 3000! '));

// To start development server (node live server), enter the following command in the terminal:
// $ node app.js
// Then open the website on the browser on localhost:3000 (or whichever port the console prints).

//OR even better, use the
// $ nodemon
// command to start the nodemon utility / monitor script