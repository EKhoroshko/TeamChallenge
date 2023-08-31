import propTypes from 'prop-types';
import Input from '../../../../../../Components/Input/Input';
import css from './Total.module.css';

const Total = ({ value, onChange, totalPrice }) => {
  return (
    <div className={css.totalBox}>
      <p className={css.title}>In total</p>
      <label className={css.label}>
        Discount coupon code
        <Input
          className={css.inputDiscount}
          type="text"
          name="discont"
          value={value}
          onChange={onChange}
        />
      </label>
      <Input className={css.inputUse} type="button" value="Use a coupon" />
      <p className={css.priceLine}>
        Price
        <span>
          {new Intl.NumberFormat('de-DE', {
            style: 'currency',
            currency: 'USD',
          }).format(totalPrice)}
        </span>
      </p>
      <button type="button" className={css.button}>
        To order
      </button>
    </div>
  );
};

Total.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func,
  totalPrice: propTypes.number,
};

export default Total;
