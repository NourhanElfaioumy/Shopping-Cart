let products = [
  {
    id: 1,
    title: "Brand",
    image: "img/card2.png",
    description: "T-shirt and Sneaker",
    price: 120,
    inCart: 0,
  },
  {
    id: 2,

    title: "Brand",
    image: "img/product-8.jpg",
    description: "Smart Watch",
    price: 220,
    inCart: 0,
  },
  {
    id: 3,
    title: "Brand",
    image: "img/card5.png",
    description: "T-shirt",
    price: 520,
    inCart: 0,
  },
  {
    id: 4,
    title: "Brand",
    image: "img/card9.png",
    description: "Black & White Sneaker",
    price: 225,
    inCart: 0,
  },
  {
    id: 5,
    title: "Brand",
    image: "img/product-9.jpg",
    description: "Smart Watch",
    price: 120,
    inCart: 0,
  },
  {
    id: 6,
    title: "Brand",
    image: "img/card11.png",
    description: "Grey & Orange Sneaker",
    price: 200,
    inCart: 0,
  },
];

let productDom = document.querySelector(".product-cards");
let cartProduct = document.querySelector(".carts-product");

let carts = document.querySelectorAll(".card-btn");
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumber(products[i]);
    totalCost(products[i]);
  });
}
function onLoadCartNumber() {
  let productNumber = localStorage.getItem("cartNumber");
  if (productNumber) {
    document.querySelector(".cart-span").textContent = productNumber;
  }
}

function cartNumber(product) {
  let productNumber = localStorage.getItem("cartNumber");
  productNumber = parseInt(productNumber);
  if (productNumber) {
    localStorage.setItem("cartNumber", productNumber + 1);
    document.querySelector(".cart-span").textContent = productNumber + 1;
  } else {
    localStorage.setItem("cartNumber", 1);
    document.querySelector(".cart-span").textContent = 1;
  }
  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productInCart");
  cartItems = JSON.parse(cartItems);
  if (cartItems != null) {
    if (cartItems[product.description] != undefined) {
      cartItems = {
        ...cartItems,
        [product.description]: product,
      };
    }
    cartItems[product.description].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.description]: product,
    };
  }

  localStorage.setItem("productInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

onLoadCartNumber();
