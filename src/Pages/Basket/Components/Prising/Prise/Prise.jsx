import Input from '../../../../../Components/Input/Input';
import propTypes from 'prop-types';
import css from './Prise.module.css';

const Prise = ({
  totalPrice,
  discountCode,
  handleDiscount,
  handleCheackDiscount,
  handleComment,
  discountMessage,
  discount,
  loadingPromo,
}) => {
  let error = discountMessage ? (
    <p className={css.error}>{discountMessage}</p>
  ) : null;

  console.log(loadingPromo);

  return (
    <div className={css.prisePromoBox}>
      <textarea
        className={css.comment}
        name="comment"
        id="comment"
        cols="30"
        rows="8"
        placeholder="Order comment"
        onChange={handleComment}
      ></textarea>
      <div className={css.box}>
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
        {error}
      </div>
      <div className={css.discountBox}>
        <p className={css.text}>
          Discount:
          {totalPrice ? (
            <span>
              {new Intl.NumberFormat('de-DE', {
                style: 'currency',
                currency: 'USD',
              }).format(discount)}
            </span>
          ) : null}
        </p>
        <p className={css.text}>
          In total:
          <span className={css.prise}>
            {new Intl.NumberFormat('de-DE', {
              style: 'currency',
              currency: 'USD',
            }).format(totalPrice)}
          </span>
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
  handleComment: propTypes.func,
  discountMessage: propTypes.string,
  discount: propTypes.number,
  loadingPromo: propTypes.bool,
};

export default Prise;
