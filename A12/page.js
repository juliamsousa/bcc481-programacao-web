const image_list = document.querySelectorAll("img");
const total_images = image_list.length;

console.log("Total images: " + total_images);

const new_paragraph = document.createElement('p');
new_paragraph.textContent = `Number of images: ${total_images}`;

new_paragraph.style.backgroundColor = 'black';
new_paragraph.style.color = 'purple';
new_paragraph.style.fontSize = '30px';

const child = document.body.children[0];
document.body.insertBefore(new_paragraph, child);

const new_img_src = 'https://th.bing.com/th/id/OIP.RyQm0AJIbWG4bx98O9mJkQHaLH?pid=ImgDet&rs=1';
for (const image in image_list) {
    image.src = new_img_src;
    console.log("substituindo imagem");
}