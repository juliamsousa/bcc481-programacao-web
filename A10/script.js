const img = document.querySelector('#first');
const seconImg = document.querySelector('#second');

var clicks = 0;
var doorClosed = true;

img.addEventListener('click', toggleImage);
seconImg.addEventListener('click', toggleImage);

function toggleImage(event) {
    event.preventDefault();
    clicks++;

    const firstContainer = document.querySelector('#first-container');
    const secondContainer = document.querySelector('#second-container');

    if(doorClosed) {
        const secondCounter = document.querySelector('#second-click-counter');
        const secondTimestamp = document.querySelector('#second-timestamp');

        secondCounter.innerText = `Cliques na porta: ${clicks}`
        secondTimestamp.innerText = `Timestamp: ${Date(Date.UTC())}`

        firstContainer.classList = "container hidden"
        secondContainer.classList = "container"
    } else {
        const firstCounter = document.querySelector('#first-click-counter');
        const firstTimestamp = document.querySelector('#first-timestamp');

        firstCounter.innerText = `Cliques na porta: ${clicks}`
        firstTimestamp.innerText = `Timestamp: ${Date(Date.UTC())}`

        firstContainer.classList = "container"
        secondContainer.classList = "container hidden"
    }
    
    doorClosed = !doorClosed;
}
