const createNavbar = () => {
  let navbar = document.querySelector(".navbar");
  navbar.innerHTML = `<nav class="nav">
    <img src="img/logo.png" alt="logo"  class="our-logo">
    <ul class="lists">
        <li class="list-item"> <a href="file:///D:/Work/E-commerce%202/home.html#" class="link">Home</a></li>
        <li class="list-item"> <a href="file:///D:/Work/E-commerce%202/products.html#" class="link">Products</a></li>
        <li class="list-item"> <a href="#" class="link">About</a></li>
        <li class="list-item"> <a href="#" class="link">Contact</a></li>
        <li  class="list-cart"><i class="fa fa-cart-plus shoppingCart" style="font-size:20px"><span class="cart-span">0</span></i>
        </li>

     </ul>
     <div class="producstOnCart hide">
     <div class="overlay"></div>
     <div class="top">
         <button id="closeButton">
             <i class="fas fa-times-circle"></i>
         </button>
         <h3>Cart</h3>
     </div>
     <ul id="buyItems">
         <h4 class="empty">Your shopping cart is empty</h4>
         
     </ul>
     <button class="btn checkout hidden">Check out</button>
 </div>

</nav>`;
};
createNavbar();

function closeCart() {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
}

const openShopCart = document.querySelector(".shoppingCart");
openShopCart.addEventListener("click", () => {
  const cart = document.querySelector(".producstOnCart");
  cart.classList.toggle("hide");
  document.querySelector("body").classList.toggle("stopScrolling");
});

const closeShopCart = document.querySelector("#closeButton");
const overlay = document.querySelector(".overlay");
closeShopCart.addEventListener("click", closeCart);
overlay.addEventListener("click", closeCart);
