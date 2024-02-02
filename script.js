// Adding JS code below

// Create an image slideshow
let currentImageIndex = 0;
const images = ["", "", ""];
const imageElement = document.getElementById("slideshow");

function changeImage() {
    imageElement.src = images[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

setInterval(changeImage, 3000); // Change image every 3 seconds
