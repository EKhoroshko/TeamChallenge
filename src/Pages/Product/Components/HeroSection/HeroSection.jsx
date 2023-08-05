import propTypes from 'prop-types';
import css from './HeroSection.module.css';

const HeroSection = ({ product, itemId, addToCart }) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.flex}>
          <img src={product.image} alt={itemId} className={css.img} />
          <div>
            <h3 className={css.title}>{product.name}</h3>
            <p className={css.vendor}>
              Vendor code:<span className={css.id}>{itemId}</span>
            </p>
            <p className={css.description}>{product.description}</p>
            <p className={css.price}>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(product.price)}
            </p>
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
