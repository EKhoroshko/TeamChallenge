import { ReactComponent as Cross } from '../../../../../../assets/cross.svg';
import propTypes from 'prop-types';
import css from './Card.module.css';

const Card = ({ image, itemId, name, price, quantity }) => {
  return (
    <li className={css.item}>
      <div className={css.imageBox}>
        <img src={image} alt="logo" className={css.image} />
      </div>
      <div className={css.cardInfo}>
        <div className={css.leftBox}>
          <p className={css.nameProduct}>{name}</p>
          <p className={css.vendor}>Vendor code: {itemId}</p>
        </div>
        <div className={css.rightBox}>
          <p className={css.price}>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'USD',
            }).format(price)}
          </p>
        </div>
        <p className={css.svg}>
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
  price: propTypes.string,
  quantity: propTypes.number,
};

export default Card;
