let express = require('express');

// create an express app which handles HTTP request
let app = express();
app.listen(3000, function () {
    console.log('Server is listening on http://localhost:3000')
})

// make express handle JSON properly
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// serve static HTML to the client
app.use(express.static('public'));

// "/uploadSketch" POST request handler
// when a client upload a sketch link,
// handle that sketch link by saving it in
// an array of sketch links
let sketchLinks = [];
app.post('/uploadSketch', uploadSketchPostRequestHandler);
function uploadSketchPostRequestHandler(req, res) {
    console.log('got uploadsketch post request');

    let link = req.body.sketchEmbedLink; 
    console.log('link: ', link);

    sketchLinks.push(link);
    console.log('how many sketch links do we have? ', sketchLinks.length)
    res.send('ok');
}



// "/" GET request handler
// when a client requests to view the gallery page
// dynamically build the HTML gallery based 
// on the array of sketch links
app.get('/', myGalleryPageRequestHandler);
function myGalleryPageRequestHandler(req, res){

    let galleryHtml = "<head><link rel='stylesheet' type='text/css' href='gallery.css'></head>"
    galleryHtml += "<body>"
        
        galleryHtml += "<h1>Sketch Gallery</h1>"
        galleryHtml += "<div id='sketchGalleryDiv'>"

            for (let i = 0; i < sketchLinks.length; i++){
                galleryHtml += sketchLinks[i];
            }
        galleryHtml += "</div>"
    galleryHtml += "</body>"

    res.send(galleryHtml);
}