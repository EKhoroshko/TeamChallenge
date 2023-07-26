/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Canin from '../../../../assets/Canin.jpg';
import css from './Recomendation.module.css';

const RecomCard = ({
  name,
  price,
  description,
  itemId,
  category,
  subcategory,
  image = Canin,
  margin,
  addToCart,
}) => {
  const handleViewProduct = (
    name,
    price,
    description,
    margin,
    itemId,
    category,
    subcategory,
    image,
  ) => {
    let product = {
      name,
      price,
      description,
      itemId,
      category,
      subcategory,
      image,
    };
    const viewedProducts =
      JSON.parse(localStorage.getItem('viewedProducts')) || [];
    if (!viewedProducts.find(item => item.itemId === product.itemId)) {
      viewedProducts.unshift(product);
      localStorage.setItem(
        'viewedProducts',
        JSON.stringify(viewedProducts.slice(0, 4)),
      );
    }
  };

  const handleAddToCart = event => {
    event.preventDefault();
    addToCart({ name, price, itemId });
  };

  return (
    <li
      className={margin}
      onClick={() =>
        handleViewProduct(
          name,
          price,
          description,
          margin,
          itemId,
          category,
          subcategory,
          image,
        )
      }
    >
      <Link
        to={{
          pathname: `/${category}/${subcategory}/${itemId}`,
        }}
      >
        <div className={css.cardWrapper}>
          <img src={image} alt="canin" className={css.src} />
          <div className={css.descrBox}>
            <p className={css.title}>{name}</p>
            <p className={css.descriptionCard}>{description}</p>
            <p className={css.price}>${price}</p>
            <button className={css.btnBuy} onClick={handleAddToCart}>
              Add to cart
            </button>
          </div>
        </div>
      </Link>
    </li>
  );
};

RecomCard.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  description: propTypes.string,
  itemId: propTypes.string,
  category: propTypes.string,
  subcategory: propTypes.string,
  image: propTypes.string,
  margin: propTypes.string,
  addToCart: propTypes.func,
};

export default RecomCard;
