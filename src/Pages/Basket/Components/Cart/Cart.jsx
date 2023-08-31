import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import List from './Components/List/List';
import Total from './Components/Total/Total';
import css from './Cart.module.css';

const Cart = () => {
  const cartProduct = useLoaderData();
  const [data, setData] = useState(cartProduct);
  const [value, setValue] = useState('');

  console.log('data', cartProduct);

  const deleteProductCart = id => {
    const filterData = data.filter(item => item.itemId !== id);
    localStorage.setItem('cart', JSON.stringify(filterData));
    setData(filterData);
    return filterData;
  };

  console.log(value);

  let totalPrice = 1000;

  const handleChangeDiscont = e => {
    setValue(e.target.value);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <List data={data} deleteProductCart={deleteProductCart} />
        <Total
          value={value}
          onChange={handleChangeDiscont}
          totalPrice={totalPrice}
        />
      </div>
    </section>
  );
};

export default Cart;
