import { Link } from 'react-router-dom';
import propTypes from 'prop-types';
import { AppRoute } from '../../../../enum/app-route';
import { useSelector } from 'react-redux';
import { getUserToken } from '../../../../redux/user/selectors';
import Canin from '../../../../assets/Canin.jpg';
import { ReactComponent as Basket } from '../../../../assets/basket.svg';
import { ReactComponent as Favorite } from '../../../../assets/favorite.svg';
import css from './CatalogCard.module.css';

const CatalogCard = ({
  name,
  price,
  description,
  itemId,
  category,
  subcategory,
  image = Canin,
  margin,
}) => {
  const token = useSelector(getUserToken);

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
          pathname: `${AppRoute.CATALOG}/${category}/${subcategory}/${itemId}`,
        }}
      >
        <div className={css.cardWrapper}>
          <div className={css.cardHeader}>
            <p className={css.sale}>-20%</p>
            {token ? (
              <p className={css.svg}>
                <Favorite className={css.heart} />
              </p>
            ) : null}
          </div>
          <img src={image} alt="canin" className={css.src} />
          <div className={css.descrBox}>
            <p className={css.title}>{name}</p>
            <p className={css.descriptionCard}>{description}</p>
            <div className={css.buy}>
              <p className={css.price}>${price}</p>
              <p className={css.svg}>
                <Basket className={css.basket} />
              </p>
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};

CatalogCard.propTypes = {
  name: propTypes.string,
  price: propTypes.string,
  description: propTypes.string,
  itemId: propTypes.string,
  category: propTypes.string,
  subcategory: propTypes.string,
  image: propTypes.string,
  margin: propTypes.string,
};

export default CatalogCard;
