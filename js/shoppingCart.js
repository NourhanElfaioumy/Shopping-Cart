let carts = document.querySelectorAll(".card-btn");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumber();
  });
}
function onLoadCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".cart-span").textContent = productNumber;
  }
}

function cartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumber", productNumber + 1);
    document.querySelector(".cart-span").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    document.querySelector(".cart-span").textContent = 1;
  }
}
onLoadCartNumber();
