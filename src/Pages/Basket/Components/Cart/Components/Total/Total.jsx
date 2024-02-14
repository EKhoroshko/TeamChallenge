import propTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../../../../enum/app-route';
import css from './Total.module.css';

const Total = ({ totalPrice, data }) => {
  return (
    <div className={css.totalBox}>
      <p className={css.title}>In total</p>
      <p className={css.priceLine}>
        Price
        <span>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'USD',
          }).format(totalPrice)}
        </span>
      </p>
      <Link
        to={AppRoute.PRISING}
        state={{ paramName: { data, totalPrice } }}
        className={css.button}
      >
        To order
      </Link>
    </div>
  );
};

Total.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  totalPrice: propTypes.number,
  data: propTypes.array,
};

export default Total;
