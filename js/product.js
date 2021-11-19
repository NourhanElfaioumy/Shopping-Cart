const productImgs = document.querySelectorAll(".product-imgs img");
const imgsSlide = document.querySelector(".img-slider");
let activeImgSlide = 0;

productImgs.forEach((item, i) => {
  item.addEventListener("click", () => {
    productImgs[activeImgSlide].classList.remove("active");
    item.classList.add("active");
    imgsSlide.style.backgroundImage = `url('${item.src}')`;
    activeImgSlide = i;
  });
});

const sizeBtn = document.querySelectorAll(".size-btn");
let checkedBtn = 0;

sizeBtn.forEach((item, i) => {
  item.addEventListener("click", () => {
    sizeBtn[checkedBtn].classList.remove("check");
    item.classList.add("check");
    checkedBtn = i;
  });
});
