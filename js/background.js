const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const addImage = document.createElement("img");

addImage.src = `img/${chosenImage}`;

document.body.append(addImage);