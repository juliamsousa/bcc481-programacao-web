const button = document.querySelector('button');
var toggle = true;

button.addEventListener('click', toggleImage);

function toggleImage(event) {
    event.preventDefault();
    const img = document.querySelector('img');

    toggle ? (img.src = `assets/img3.jpg`) : (img.src = `assets/img1.jpg`)
    
    toggle = !toggle;
}