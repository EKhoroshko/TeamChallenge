import { toastAction } from '../enum/toastAction';
import { toast } from 'react-toastify';

export const addToCart = (item, quantity = 1) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cheackProduct = cartItems.find(
    product => product.itemId === item.itemId,
  );
  if (cheackProduct) {
    cheackProduct.quantity += quantity;
  } else {
    cartItems.push({ ...item, quantity });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  toast.success('Product add to cart', toastAction);
};
