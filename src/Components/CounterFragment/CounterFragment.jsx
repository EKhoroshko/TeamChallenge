import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import css from './CounterFragment.module.css';

const CounterFragment = ({ product, counter, setCounter, addToCart }) => {
  const location = useLocation();
  const [fail, setFail] = useState(false);
  const { name, price, image, quantity, itemId } = product;

  const handleIncrement = () => {
    setCounter(prevState => prevState + 1);
    if (addToCart) {
      return addToCart({ name, price, itemId, image, quantity }, 1);
    }
  };

  const handleDicrement = () => {
    if (quantity > 1) {
      setCounter(prevState => prevState - 1);
      if (addToCart) {
        return addToCart({ name, price, itemId, image, quantity }, -1);
      }
    }
  };

  useEffect(() => {
    if (counter >= quantity && location.pathname === '/cart') {
      setFail(true);
    }
    return () => {
      setFail(false);
    };
  }, [counter, itemId, location.pathname, quantity]);

  const cheackQuqntity =
    counter >= quantity ? (
      <>
        <p className={css.quantity}>{quantity}</p>
        <button className={css.btn} onClick={handleIncrement} disabled>
          +
        </button>
      </>
    ) : (
      <>
        <p className={css.quantity}>{counter}</p>
        <button className={css.btn} onClick={handleIncrement}>
          +
        </button>
      </>
    );

  return (
    <div>
      <div className={css.buttonBox}>
        <button className={css.btn} onClick={handleDicrement}>
          -
        </button>
        {cheackQuqntity}
      </div>
      {fail ? <p className={css.all}>Sorry!! Not more product</p> : null}
    </div>
  );
};

CounterFragment.propTypes = {
  product: propTypes.object,
  counter: propTypes.number,
  setCounter: propTypes.func,
  addToCart: propTypes.func,
};

export default CounterFragment;
