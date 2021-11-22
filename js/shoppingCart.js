// let products = [
//   {
//     id: 1,
//     title: "Brand",
//     image: "img/card2.png",
//     description: "T-shirt and Sneaker",
//     price: "120$",
//   },
//   {
//     id: 2,

//     title: "Brand",
//     image: "img/product-8.jpg",
//     description: "Smart Watch",
//     price: "220$",
//   },
//   {
//     id: 3,
//     title: "Brand",
//     image: "img/card5.png",
//     description: "T-shirt",
//     price: "$53$",
//   },
//   {
//     id: 4,
//     title: "Brand",
//     image: "img/card9.png",
//     description: "Black & White Sneaker",
//     price: "225$",
//   },
//   {
//     id: 5,
//     title: "Brand",
//     image: "img/product-9.jpg",
//     description: "Smart Watch",
//     price: "120$",
//   },
//   {
//     id: 6,
//     title: "Brand",
//     image: "img/card11.png",
//     description: "Grey & Orange Sneaker",
//     price: "200$",
//   },
// ];

let productDom = document.querySelector(".product-cards");
let cartProduct = document.querySelector(".carts-product");

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
// onLoadCartNumber();

// function productUI() {
//   let productUII = products.map((item) => {
//     return `
//         <div  class="product-cards">
//         <div class="product-img">
//             <img src='${item.image}' class="image-product" >
//         <button class="card-btn" onclick='addToCart(${item.id})'>Add to cart</button>
//         </div>
//         <div class="product-info">
//             <h2 class="product-brand">'${item.title}'</h2>
//             <p class="product-description">'${item.description}'</p>
//         <span class="price">'${item.price}'</span>
//         <span class="price-span"></span>

//     </div>
//     <div>
//         `;
//   });
//   productDom.innerHTML = productUII;
// }
// productUI();

// function addToCart(id) {
//   let chooseItem = products.find((item) => item.id === id);
//   cartProduct.innerHTML += `<p>${chooseItem.description}</p>`;
// }
