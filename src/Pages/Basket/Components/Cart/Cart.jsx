import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import List from './Components/List/List';
import Total from './Components/Total/Total';
import css from './Cart.module.css';

const Cart = () => {
  const cartProduct = useLoaderData();
  const [data, setData] = useState(cartProduct || []);

  const deleteProductCart = id => {
    const filterData = data.filter(item => item.itemId !== id);
    localStorage.setItem('cart', JSON.stringify(filterData));
    setData(filterData);
    return filterData;
  };

  const totalPrice = data.reduce((acc, item) => {
    const itemTotal = item.price * item.counter;
    return acc + itemTotal;
  }, 0);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <List
          data={data}
          deleteProductCart={deleteProductCart}
          setData={setData}
        />
        <Total totalPrice={totalPrice} data={data} />
      </div>
    </section>
  );
};

export default Cart;
