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

  let date = new Date().toISOString().split('T')[0];

  const store =
    cheackbox === 'delivery from the store' ? (
      <form className={css.formStore}>
        <Input
          className={css.inputPost}
          type="text"
          name="city"
          value={city}
          onChange={e => handleChange(e, setDeliveryForm)}
          placeholder="Delivery address"
        />
        <div className={css.flex}>
          <label className={css.labelSelect}>
            Date
            <input
              className={css.inputDate}
              type="date"
              name="date"
              min={date}
              // value={date}
            />
          </label>
          <label className={css.labelSelect}>
            Time
            <select name="time" id="time" className={css.select}>
              <option value="morning">9:00 - 12:00</option>
              <option value="day">12:00-16:00</option>
              <option value="evening">16:00-21:00</option>
            </select>
          </label>
        </div>
      </form>
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
            placeholder="Enter your city"
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
            placeholder="Enter warehouse number"
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
            <label className={css.label} htmlFor={item}>
              <input
                type="checkbox"
                className={css.cheackbox}
                id={item}
                checked={cheackbox === item}
                value={item}
                onChange={e => handleCheacked(e, setCheackbox)}
              />
              <span className={css.customCheckbox}></span>
              <span className={css.text}>{item}</span>
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
