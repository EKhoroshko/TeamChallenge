import propTypes from 'prop-types';
import css from './Payment.module.css';

const Payment = ({
  payment,
  handleCheacked,
  cheachPayment,
  setCheachPayment,
}) => {
  return (
    <section className={css.section}>
      <h3 className={css.title}>3. Choose a payment method</h3>
      <ul>
        {payment.map(item => (
          <li className={css.item} key={item}>
            <input
              type="checkbox"
              className="checkbox"
              id={item}
              value={item}
              onChange={e => handleCheacked(e, setCheachPayment)}
              checked={cheachPayment === item}
            />
            <label className={css.label} htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>
    </section>
  );
};

Payment.propTypes = {
  payment: propTypes.array,
  handleCheacked: propTypes.func,
  cheachPayment: propTypes.string,
  setCheachPayment: propTypes.func,
};

export default Payment;
