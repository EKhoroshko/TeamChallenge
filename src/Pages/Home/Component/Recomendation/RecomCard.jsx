import Canin from '../../../../assets/Canin.jpg';
import { ReactComponent as Basket } from '../../../../assets/basket.svg';
import { ReactComponent as Favorite } from '../../../../assets/favorite.svg';
import css from './Recomendation.module.css';

// eslint-disable-next-line react/prop-types
const RecomCard = ({ name, price, description }) => {
  return (
    <div className={css.cardWrapper}>
      <div className={css.cardHeader}>
        <p className={css.sale}>-20%</p>
        <p className={css.svg}>
          <Favorite className={css.heart} />
        </p>
      </div>
      <img src={Canin} alt="canin" className={css.src} />
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
  );
};

export default RecomCard;
