import { useState } from 'react';
import { ReactComponent as Cross } from '../../../../../../assets/cross.svg';
import CounterFragment from '../../../../../../Components/CounterFragment/CounterFragment';
import { addToCart } from '../../../../../../helpers/addToCart';
import propTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({
  image,
  itemId,
  name,
  price,
  quantity,
  counter,
  deleteProductCart,
}) => {
  const [count, setCount] = useState(counter);
  const product = { name, price, itemId, image, quantity };

  const onDeleteProduct = () => {
    deleteProductCart(itemId);
  };

  return (
    <li className={css.item}>
      <div className={css.imageBox}>
        <img src={image} alt="logo" className={css.image} />
      </div>
      <div className={css.cardInfo}>
        <div className={css.leftBox}>
          <p className={css.nameProduct}>{name}</p>
          <p className={css.vendor}>Vendor code: {itemId}</p>
          <CounterFragment
            product={product}
            counter={count}
            setCounter={setCount}
            addToCart={addToCart}
          />
        </div>
        <div className={css.rightBox}>
          <p className={css.price}>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </p>
        </div>
        <p className={css.svg} onClick={onDeleteProduct}>
          <Cross className={css.cross} />
        </p>
      </div>
    </li>
  );
};

Card.propTypes = {
  image: propTypes.string,
  itemId: propTypes.string,
  name: propTypes.string,
  price: propTypes.number,
  quantity: propTypes.number,
  counter: propTypes.number,
  deleteProductCart: propTypes.func,
};

export default Card;
