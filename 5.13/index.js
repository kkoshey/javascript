function addToCart(product) {
    let productInCart = document.createElement('li');
    let productName = document.createElement('span');
    productName.textContent = product;
    productInCart.append(productName);
    cart.appendChild(productInCart);
}