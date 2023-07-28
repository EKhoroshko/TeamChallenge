export const addToCart = item => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cheackProduct = cartItems.find(
    product => product.itemId === item.itemId,
  );
  if (cheackProduct) {
    cheackProduct.quantity += 1;
  } else {
    cartItems.push({ ...item, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
};
