const button = document.querySelector('button');

button.addEventListener('click', toggleImage);

function toggleImage(event) {
    event.preventDefault();
    const img = document.querySelector('img');
    
    let number = Math.floor(Math.random()*(5-1)+1)
    let src_str = `assets/img${number}.jpg`;
    
    img.src = src_str;
}