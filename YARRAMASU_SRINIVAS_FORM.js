let cartCount = 0;

document.getElementById('addToCart').addEventListener('click', () => {
    cartCount++;
    document.getElementById('cartCount').textContent = cartCount;
});

document.getElementById('buyNow').addEventListener('click', () => {
    if (cartCount === 0) {
        alert('Your cart is empty. Please add items to your cart before buying.');
    } else {
        alert('Your order has been placed. Thank you for shopping with us!');
        cartCount = 0;
        document.getElementById('cartCount').textContent = cartCount;
    }
});