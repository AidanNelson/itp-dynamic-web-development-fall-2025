require("dotenv").config();
let express = require("express");

let multer = require("multer");
const fs = require('fs');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

let upload = multer({ storage: storage });

// create an http server application which
// responds to any HTTP requests
let app = express();

// have our server respond to get requests
// with the appropriate file from the 'public' folder
app.use(express.static("public"));

// listen on port 8080
app.listen(8080, function () {
  console.log("Server listening on port 8080");
});

app.post(
  "/uploadImage",
  upload.single("image"),
  async function (req, res, next) {
    console.log("File uploaded:", req.file);

    // get GPS data from uploaded image (if any)
    // using exiftool
    const { ExifTool } = require("exiftool-vendored");
    const exiftool = new ExifTool();
    const filePath = req.file.path; 
    const tags = await exiftool.read(filePath);
    let gpsData = {
      latitude: tags.GPSLatitude,
      longitude: tags.GPSLongitude,
    };
    console.log("GPS Data:", gpsData);
    await exiftool.end();

    let query = "nature";
    let key = process.env.PEXELS_API_KEY;
    let pexelsResponse = await fetch(
      "https://api.pexels.com/v1/search?query=" + query + "&per_page=10",
      {
        headers: {
          Authorization: key,
        },
      }
    );
    let json = await pexelsResponse.json();
    console.log(json);

    // pull all photo URLs in an array
    let urls = [];
    for (let i = 0; i < json.photos.length; i++) {
      urls.push(json.photos[i].src.medium);
    }

    res.send(urls);


  }
);
