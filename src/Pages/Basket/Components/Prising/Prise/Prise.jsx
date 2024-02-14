import Input from '../../../../../Components/Input/Input';
import propTypes from 'prop-types';
import css from './Prise.module.css';

const Prise = ({
  totalPrice,
  discountCode,
  handleDiscount,
  handleCheackDiscount,
}) => {
  return (
    <div className={css.prisePromoBox}>
      <div className={css.box}>
        <Input
          type="text"
          name="discount"
          placeholder="Promo code"
          className={css.input}
          value={discountCode}
          onChange={handleDiscount}
        />
        <input
          type="button"
          name="add"
          value="add"
          className={css.inputAdd}
          onClick={handleCheackDiscount}
        />
      </div>
      <div className={css.discountBox}>
        <p className={css.text}>Discount:</p>
        <p className={css.text}>
          In total: <span className={css.prise}>{totalPrice}</span>
        </p>
      </div>
    </div>
  );
};

Prise.propTypes = {
  totalPrice: propTypes.number,
  discountCode: propTypes.string,
  handleDiscount: propTypes.func,
  handleCheackDiscount: propTypes.func,
};

export default Prise;
