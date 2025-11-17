let express = require('express');

// create an http server application which 
// responds to any HTTP requests
let app = express();

// have our server respond to get requests
// with the appropriate file from the 'public' folder
app.use(express.static('public'));

// listen on port 8080
app.listen(8080);