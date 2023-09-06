export function loadCart() {
    const cart = JSON.parse(localStorage.getItem('cart'));
    return cart;
}