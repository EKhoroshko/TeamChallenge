import propTypes from 'prop-types';
import css from './CheckBox.module.css';

const CheckBox = ({ type, handleChange }) => {
  return (
    <li className={css.item}>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        value={type}
        onChange={handleChange}
      />
      <label className={css.label} htmlFor="checbox">
        {type}
      </label>
    </li>
  );
};

CheckBox.propTypes = {
  type: propTypes.string,
  handleChange: propTypes.func,
};

export default CheckBox;
