const lqipContainer = document.querySelector(".lqip");
const lqipCanvas = document.querySelector(".lqip-canvas").getContext("2d");
const lqipThumbnail = document.querySelector(".lqip-thumbnail");
const lqipImage = document.querySelector(".lqip-image");

let img = new Image();
img.onload = function () {
    lqipCanvas.drawImage(img, 0, 0, 300, 150);
    lqipContainer.classList.add("canvas-loaded");
}
img.src = lqipThumbnail.getAttribute("src");

window.addEventListener("load",function() {
    const dataSrc = lqipImage.getAttribute("data-img");

    lqipImage.src = dataSrc;

    lqipImage.onload = function () {
        lqipContainer.classList.add("image-loaded");
    };
});