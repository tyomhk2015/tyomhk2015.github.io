const DEFAULT_BG = {
  image: "linear-gradient(to right, #ccc8b1 1px, rgba(204,200,177,0) 1px), linear-gradient(to bottom, #ccc8b1 1px, rgba(204,200,177,0) 1px)",
  size: ".3rem .3rem",
  repeat: "initial"
}

const CUSTOM_IMAGE_SETTING = {
  size: "cover",
  repeat: "no-repeat",
  opacity: "0.5"
}

const BG_IMAGES_PATH = "/image/bg/";
const BG_IMAGES = [1,2,3,4,5,6,7];
const BG_IMAGES_EXTENSION = ".jpg";

const galleryImg = document.querySelector(".js-gallery-content");

const paintImage = () => {
  const ranNum = Math.floor(Math.random() * BG_IMAGES.length) + 1;
  document.body.style.backgroundImage = `url(..${BG_IMAGES_PATH + ranNum + BG_IMAGES_EXTENSION})`;
  document.body.style.backgroundSize = CUSTOM_IMAGE_SETTING.size;
  document.body.style.backgroundRepeat = CUSTOM_IMAGE_SETTING.repeat;
}

const changeGalleryImage = () => {
  const ranNum = Math.floor(Math.random() * BG_IMAGES.length) + 1;
  galleryImg.src = `${BG_IMAGES_PATH + ranNum + BG_IMAGES_EXTENSION}`;
}

const resetImage = () => {
  document.body.style.backgroundImage = DEFAULT_BG.image;
  document.body.style.backgroundSize = DEFAULT_BG.size;
  document.body.style.backgroundRepeat = DEFAULT_BG.repeat;
}

setInterval(changeGalleryImage, 2000);
