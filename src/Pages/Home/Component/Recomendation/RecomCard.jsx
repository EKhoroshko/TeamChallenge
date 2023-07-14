/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../enum/app-route';
import { useSelector } from 'react-redux';
import { getUserToken } from '../../../../redux/user/selectors';
import Canin from '../../../../assets/Canin.jpg';
import { ReactComponent as Basket } from '../../../../assets/basket.svg';
import { ReactComponent as Favorite } from '../../../../assets/favorite.svg';
import css from './Recomendation.module.css';

const RecomCard = ({
  name,
  price,
  description,
  margin,
  itemId,
  category,
  subcategory,
  image = Canin,
}) => {
  const token = useSelector(getUserToken);

  return (
    <li className={margin}>
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

export default RecomCard;
