const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];
const chosenImage = images[Math.floor(Math.random() * images.length)];
const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
// body 제일 아래에 추가 / 위에 추가하려면 prepend
document.body.appendChild(bgImage);
