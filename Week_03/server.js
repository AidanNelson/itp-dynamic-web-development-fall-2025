let express = require('express');

// create an http server application which 
// responds to any HTTP requests
let app = express();

// have our server respond to get requests
// with the appropriate file from the 'public' folder
app.use(express.static('public'));

// tell our express app to process incoming request bodies as JSON
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// set express app 'view-engine' configuration to use the 
// 'ejs' view engine
app.set('view-engine', 'ejs');

// create a get request handler at path /search
app.get('/search', mySearchRequestHandler)

function mySearchRequestHandler(req, res){
    let question = req.query.q;
    
    console.log('Got search request:' + question);

    let wikipediaLink = "https://en.wikipedia.org/w/index.php?fulltext=1&search=" + question + "&title=Special%3ASearch&ns0=1";
    let duckDuckGoLink = "https://duckduckgo.com/?origin=funnel_home_google&t=h_&q=" + question + "&ia=web"
    let myHtmlOutput = "<h1>Search Page</h1>"
    myHtmlOutput = myHtmlOutput + "<p>You Asked About:</p>"
    myHtmlOutput = myHtmlOutput + "<p>" + question + "</p>"
    myHtmlOutput = myHtmlOutput + "Try this link: " + wikipediaLink
    myHtmlOutput = myHtmlOutput + "Or try this link: " + duckDuckGoLink
    res.send(myHtmlOutput);
}

let secrets = [];

// build a POST request handler
app.post('/shareSecret', myShareSecretRequestHandler);
function myShareSecretRequestHandler(req, res){

    // get access to incoming secret
    console.log(req.body);
    // parse the j
    // let json = JSON.parse(req.body);

    let secret = req.body.secret;
    
    // keep track of it in the secrets array
    secrets.push(secret);
    console.log('Got POST request to /shareSecret with secret: ' + secret);


    // send a thank you
    res.send('Thank you for sharing a secret.  I will keep it safe.');
} 


app.get('/secrets', myGetSecretsRequestHandler);
function myGetSecretsRequestHandler(req, res){

    // let secretsHtml = "<h1>Secrets:</h1>"
    // secretsHtml = secretsHtml + "<h3>Here are some secrets I know</h3>"
    // for (let i = 0; i < secrets.length; i++){
    //     secretsHtml = secretsHtml + "<p>" + secrets[i] + "</p>";
    // }
    // res.send(secretsHtml);

    let dataToRender = {
        mySecrets:  secrets
    };

    res.render('secrets.ejs', dataToRender);
}

let fish =  [
        "abalone",
        "Alaska pollock",
        "American lobster",
        "American shad",
        "anchovy",
        "Arctic char",
        "Atlantic Ocean perch",
        "Atlantic mackerel",
        "Atlantic salmon",
        "Chilean sea bass",
        "Chinese white shrimp",
        "cod",
        "cooking fish",
        "Dover sole",
        "European oyster",
        "European sea bass",
        "fish",
        "hake",
        "herring",
        "Jonah crab",
        "Lake Victoria perch",
        "mackerel",
        "Pacific oyster",
        "Pacific white shrimp",
        "salmon",
        "salt cod",
        "skate",
        "trout",
        "tuna",
        "albacore tuna",
        "barracuda",
        "barramundi",
        "basa",
        "bay scallop",
        "black sea bass",
        "black tiger shrimp",
        "blue crab",
        "blue marlin",
        "blue mussel",
        "bluefin tuna",
        "bream",
        "carp",
        "catfish",
        "chinook salmon",
        "chum salmon",
        "cobia",
        "cockle",
        "coho salmon",
        "conch",
        "crayfish",
        "croaker",
        "cusk",
        "cuttlefish",
        "dogfish",
        "dory",
        "drum",
        "dungeness crab",
        "eastern oyster",
        "eel",
        "escolar",
        "flounder",
        "freshwater shrimp",
        "geoduck clam",
        "greenshell mussel",
        "grouper",
        "gulf shrimp",
        "haddock",
        "halibut",
        "hardshell clam",
        "hoki",
        "hybrid striped bass",
        "king crab",
        "kingklip",
        "lake whitefish",
        "lingcod",
        "mahimahi",
        "mako shark",
        "moi",
        "monkfish",
        "mullet",
        "octopus",
        "opah",
        "orange roughy",
        "peekytoe crab",
        "pink salmon",
        "pink shrimp",
        "pompano",
        "rainbow trout",
        "rock shrimp",
        "rockfish",
        "sablefish",
        "scup",
        "sea scallop",
        "sea urchin",
        "smelt",
        "snapper",
        "snow crab",
        "sockeye salmon",
        "spanner crab",
        "spiny lobster",
        "squat lobster",
        "squid",
        "stone crab",
        "sturgeon",
        "surf clam",
        "swordfish",
        "tilapia",
        "tilefish",
        "turbot",
        "wahoo",
        "walleye",
        "wolffish",
        "yellow perch",
        "yellowfin tuna",
        "yellowtail"
    ];
app.get("/sayHello", mySayHelloRequestHandler);
function mySayHelloRequestHandler(req, res){
    let myName = req.query.myName;
    let myFavoriteColor = req.query.myFavoriteColor;

    let randomFish= fish[Math.floor(Math.random() * fish.length)]
    let dataToRender = {
        myName: myName,
        myFavoriteColor: myFavoriteColor,
        fish: randomFish
    }

    res.render('sayHello.ejs', dataToRender)
}




// listen on port 8080
app.listen(8080);