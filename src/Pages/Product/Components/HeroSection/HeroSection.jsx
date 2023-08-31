import { useState } from 'react';
import CounterFragment from '../../../../Components/CounterFragment/CounterFragment';
import propTypes from 'prop-types';
import css from './HeroSection.module.css';

const HeroSection = ({ product, itemId, addToCart }) => {
  const [counter, setCounter] = useState(1);
  const { name, price, image, description, quantity } = product;

  const handleAddToCart = e => {
    e.preventDefault();
    addToCart({ name, price, itemId, image, quantity }, counter);
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.flex}>
          <img src={image} alt={itemId} className={css.img} />
          <div>
            <h3 className={css.title}>{name}</h3>
            <p className={css.vendor}>
              Vendor code:<span className={css.id}>{itemId}</span>
            </p>
            <p className={css.description}>{description}</p>
            <p className={css.price}>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(price)}
            </p>
            <CounterFragment
              product={product}
              counter={counter}
              setCounter={setCounter}
            />
            <button
              className={css.btnBuy}
              onClick={handleAddToCart}
              type="button"
            >
              To cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  product: propTypes.object,
  itemId: propTypes.string,
  addToCart: propTypes.func,
};

export default HeroSection;
