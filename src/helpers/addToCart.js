import { toastAction } from '../enum/toastAction';
import { toast } from 'react-toastify';

export const addToCart = (item, counter = 1,) => {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  const cheackProduct = cartItems.find(
    product => product.itemId === item.itemId,
  );
  if (cheackProduct) {
    cheackProduct.counter += counter;
    if (cheackProduct.counter >= cheackProduct.quantity) {
      cheackProduct.counter = cheackProduct.quantity
    }
  } else {
    cartItems.push({ ...item,counter });
  }

  localStorage.setItem('cart', JSON.stringify(cartItems));
  toast.success('Product add to cart', toastAction);
};
