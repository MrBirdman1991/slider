const images = document.querySelectorAll(".image-wrapper img");
const prevBtn = document.getElementById("slider-prev");
const nextBtn = document.getElementById("slider-next");

function slider() {
  let index = 0;

  function removeActive() {
    for (let img of images) {
      img.classList.remove("active");
    }
  }

  function addActive(img) {
    img.classList.add("active");
  }

  function swipePrev() {
    index--;

    if (index < 0) {
      index = images.length - 1;
    }
    removeActive();
    addActive(images[index]);
  }

  function swipeNext() {
    index++;

    if (index >= images.length) {
      index = 0;
    }
    removeActive();
    addActive(images[index]);
  }

  return {swipeNext, swipePrev}

}

const slide = slider();

nextBtn.addEventListener("click", slide.swipeNext);
prevBtn.addEventListener("click", slide.swipePrev);
