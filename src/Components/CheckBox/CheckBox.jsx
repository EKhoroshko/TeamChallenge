import propTypes from 'prop-types';
import css from './CheckBox.module.css';

const CheckBox = ({ type }) => {
  return (
    <li className={css.item}>
      <input type="checkbox" className="checkbox" id="checkbox" />
      <label className={css.label} htmlFor="checbox">
        {type}
      </label>
    </li>
  );
};

CheckBox.propTypes = {
  type: propTypes.string,
};

export default CheckBox;
