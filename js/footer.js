const createFooter = () => {
  let footer = document.querySelector("footer");

  footer.innerHTML = `
    <div class="footer-content">
    <img src="img/logo-white.png" class="logo" alt="logo">
<div class="footer-list-container">
    <ul class="footer-list">
        <li class="list-title">Clothes</li>
        <li><a href="#" class="footer-link">T-shirts</a></li>
        <li><a href="#" class="footer-link">Sweatshirts</a></li>
        <li><a href="#" class="footer-link">Jeans</a></li>
        <li><a href="#" class="footer-link">Casual</a></li>
        <li><a href="#" class="footer-link">Trousers</a></li>
    </ul>
    
    <ul class="footer-list">
        <li class="list-title">Sneakers</li>
        <li><a href="#" class="footer-link">Addidas</a></li>
        <li><a href="#" class="footer-link">Puma</a></li>
        <li><a href="#" class="footer-link">Nike</a></li>
        <li><a href="#" class="footer-link">H&M</a></li>
        <li><a href="#" class="footer-link">Zara</a></li>
    </ul>
</div>
</div>
<div class="footer-social-container">
    <div>
        <a href="#" class="social-links">Terms & services</a>
        <a href="#" class="social-links">Privacy page</a>

    </div>
    <div>
        <a href="#" class="social-links">Facebook</a>
        <a href="#" class="social-links">Twitter</a>
        <a href="#" class="social-links">Instagram</a>
    </div>
</div>
<p class="footer-credit">Clothing, Best apparels online store</p>
    `;
};

createFooter();
