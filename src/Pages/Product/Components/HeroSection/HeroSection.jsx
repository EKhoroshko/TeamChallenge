import CounterFragment from '../../../../Components/CounterFragment/CounterFragment';
import propTypes from 'prop-types';
import css from './HeroSection.module.css';

const HeroSection = ({
  product,
  itemId,
  addToCart,
  counter,
  setCounter,
  fail,
}) => {
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
            {fail ? (
              <button
                className={css.btnBuy}
                onClick={handleAddToCart}
                type="button"
                disabled
              >
                To cart
              </button>
            ) : (
              <button
                className={css.btnBuy}
                onClick={handleAddToCart}
                type="button"
              >
                To cart
              </button>
            )}
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
  setCounter: propTypes.func,
  counter: propTypes.number,
  fail: propTypes.bool,
};

export default HeroSection;
