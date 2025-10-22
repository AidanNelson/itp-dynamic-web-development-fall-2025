// this function logs "hello" to the console
function sayHello(ev) {
    console.log('hello!');
}
// save a reference to our button
let helloButton = document.getElementById('hellobutton');

// then add an event handler to the button
helloButton.addEventListener('click', sayHello);




// save a reference to our button
let button = document.getElementById('mybutton');

// then add an event handler to the button
button.addEventListener('click', getArtwork);

// save a reference to out info panel
let infoPanel = document.getElementById('info');

// this function uses the 'fetch' api to get some information from a remote resource
function getArtwork() {
    console.log("Fetching info from a remote server!");
    let url = "https://api.artic.edu/api/v1/artworks/129881";

    fetch(url)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            infoPanel.innerText += "\n" + data.data.title;
        })
}
