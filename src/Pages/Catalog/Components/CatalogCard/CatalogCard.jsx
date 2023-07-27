import { Link, useLocation } from 'react-router-dom';
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import {
  getUserToken,
  getLoadingUser,
  getUserFavoritListID,
} from '../../../../redux/user/selectors';
import Canin from '../../../../assets/Canin.jpg';
import { ReactComponent as Basket } from '../../../../assets/basket.svg';
import { ReactComponent as Favorite } from '../../../../assets/favorite.svg';
import { ReactComponent as Cross } from '../../../../assets/cross.svg';
import { ReactComponent as HeartFull } from '../../../../assets/heartFull.svg';
import { Hearts } from 'react-loader-spinner';
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
  addToCart,
  handleAddFavorite,
  handleDeletProduct,
}) => {
  const token = useSelector(getUserToken);
  const isLoading = useSelector(getLoadingUser);
  const favoritID = useSelector(getUserFavoritListID);
  const params = useLocation();
  const location = params.pathname.split('/').includes('favorite');
  const isFavorite = favoritID.includes(itemId);

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

  const handleAddToCart = e => {
    e.preventDefault();
    addToCart({ name, price, itemId });
  };

  const onAddToFavorite = e => {
    e.preventDefault();
    handleAddFavorite(itemId);
  };

  const onDeleteFavorite = e => {
    e.preventDefault();
    handleDeletProduct(itemId);
  };

  const toggle = location ? (
    <p className={css.svg} onClick={onDeleteFavorite}>
      <Cross className={css.cross} />
    </p>
  ) : (
    <p className={css.svg} onClick={onDeleteFavorite}>
      <HeartFull className={css.heart} />
    </p>
  );

  const favoriteHeart = isFavorite ? (
    toggle
  ) : (
    <p className={css.svg} onClick={onAddToFavorite}>
      <Favorite className={css.heart} />
    </p>
  );

  const load = isLoading ? (
    <div className={css.spinerBox}>
      <Hearts
        height="24"
        width="30"
        color="#d2691e"
        ariaLabel="hearts-loading"
        visible={true}
      />
    </div>
  ) : (
    favoriteHeart
  );

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
          <div className={css.cardHeader}>{token ? load : null}</div>
          <img src={image} alt="canin" className={css.src} />
          <div className={css.descrBox}>
            <p className={css.title}>{name}</p>
            <p className={css.descriptionCard}>{description}</p>
            <div className={css.buy}>
              <p className={css.price}>${price}</p>
              <p className={css.svg} onClick={handleAddToCart}>
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
  addToCart: propTypes.func,
  handleAddFavorite: propTypes.func,
  handleDeletProduct: propTypes.func,
};

export default CatalogCard;