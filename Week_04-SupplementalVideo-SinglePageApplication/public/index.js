console.log('hello from js');



async function submitSketchLink() {

    let sketchEmbedLinkInput = document.getElementById('sketchEmbedLink');

    console.log(sketchEmbedLinkInput);
    console.log(sketchEmbedLinkInput.value);

    let dataToSend = {
        sketchEmbedLink: sketchEmbedLinkInput.value
    }

    let res = await fetch('/uploadSketch', {
        method: 'POST',
        body: JSON.stringify(dataToSend),
        headers: {
            'Content-Type': 'application/json'
        }
    })

    console.log('Submitted sketch');
    getSketchesFromServer();
}

async function getSketchesFromServer(){
    let res = await fetch('/sketches', {
        method: "GET",   
    }
    );
    let json = await res.json();

    let sketchContainer = document.getElementById('sketchContainer');

    // first removed all existing sketches
    let currentSketches = sketchContainer.children;
    for (let i = 0; i < currentSketches.length; i++){
        sketchContainer.removeChild(currentSketches[i]);
    }
    

    // then. added sketches from the server
    let innerHtml = "";
    for (let i =0 ; i < json.links.length; i++){
        let iframeEmbedLink = json.links[i];
        innerHtml += iframeEmbedLink.link;
    }

    sketchContainer.innerHTML = innerHtml;
}


let submitButton = document.getElementById('submitButton');

submitButton.addEventListener('click', function (e) {
    e.preventDefault();
    submitSketchLink();
})

window.submitSketchLink = submitSketchLink;
window.getSketchesFromServer = getSketchesFromServer;

window.addEventListener('load', getSketchesFromServer);






























// let dataToSend = {
//         sketchEmbedLink: sketchEmbedLinkInput.value
//     }
//     fetch('/uploadSketch', {
//         method: "POST",
//         headers: {
//             "Content-Type": "application/json",
//         },
//         body: JSON.stringify(dataToSend)
//     },
//     )