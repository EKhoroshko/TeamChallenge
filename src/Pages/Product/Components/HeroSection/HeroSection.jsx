import { useState } from 'react';
import propTypes from 'prop-types';
import css from './HeroSection.module.css';

const HeroSection = ({ product, itemId, addToCart }) => {
  const [quantity, setQuantity] = useState(1);
  const { name, price, image, description } = product;

  const handleIncrement = () => {
    setQuantity(prevState => prevState + 1);
  };

  const handleDicrement = () => {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1);
    }
  };

  const handleAddToCart = e => {
    e.preventDefault();
    addToCart({ name, price, itemId, image }, quantity);
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
            <div className={css.buttonBox}>
              <button className={css.btn} onClick={handleDicrement}>
                -
              </button>
              <p className={css.quantity}>{quantity}</p>
              <button className={css.btn} onClick={handleIncrement}>
                +
              </button>
            </div>
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
