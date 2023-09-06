import Input from '../../../../../../../Components/Input/Input';
import propTypes from 'prop-types';
import css from './Delivery.module.css';

const Delivery = ({
  delivery,
  handleCheacked,
  cheackbox,
  deliveryForm,
  setDeliveryForm,
  handleChange,
  setCheackbox,
}) => {
  const { city, post } = deliveryForm;

  const store =
    cheackbox === 'delivery from the store' ? (
      <p>
        Now we have a problem with couriers and we can not deliver your order
      </p>
    ) : null;

  const newPost =
    cheackbox === 'new post' ? (
      <form className={css.form}>
        <label className={css.labelPost}>
          Your City
          <Input
            className={css.inputPost}
            type="text"
            name="city"
            value={city}
            onChange={e => handleChange(e, setDeliveryForm)}
          />
        </label>
        <label className={css.labelPost}>
          Postal office
          <Input
            className={css.inputPost}
            type="text"
            name="post"
            value={post}
            onChange={e => handleChange(e, setDeliveryForm)}
          />
        </label>
      </form>
    ) : null;

  return (
    <section className={css.section}>
      <h3 className={css.title}>2. Choose a delivery method</h3>
      <ul className={css.list}>
        {delivery.map(item => (
          <li className={css.item} key={item}>
            <input
              type="checkbox"
              className="checkbox"
              id={item}
              value={item}
              onChange={e => handleCheacked(e, setCheackbox)}
              checked={cheackbox === item}
            />
            <label className={css.label} htmlFor={item}>
              {item}
            </label>
          </li>
        ))}
      </ul>
      {store}
      {newPost}
    </section>
  );
};

Delivery.propTypes = {
  delivery: propTypes.array,
  handleCheacked: propTypes.func,
  cheackbox: propTypes.string,
  deliveryForm: propTypes.object,
  setDeliveryForm: propTypes.func,
  handleChange: propTypes.func,
  setCheackbox: propTypes.func,
};

export default Delivery;
