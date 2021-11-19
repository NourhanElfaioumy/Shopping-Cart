const productContainer = [...document.querySelectorAll(".product-container")];
const previousBtn = [...document.querySelectorAll(".previous-btn")];
const nextBtn = [...document.querySelectorAll(".next-btn")];

productContainer.forEach((item, i) => {
  let contDimenstions = item.getBoundingClientRect();
  let contWidth = contDimenstions.width;

  nextBtn[i].addEventListener("click", () => {
    item.scrollLeft += contWidth;
  });

  previousBtn[i].addEventListener("click", () => {
    item.scrollLeft -= contWidth;
  });
});
