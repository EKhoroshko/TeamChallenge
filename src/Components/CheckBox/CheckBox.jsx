import { useState } from 'react';
import propTypes from 'prop-types';
import css from './CheckBox.module.css';

const CheckBox = ({ type, handleChange }) => {
  const [checked, setChecked] = useState(false);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <li className={css.item}>
      <input
        type="checkbox"
        className="checkbox"
        id="checkbox"
        checked={checked}
        value={type}
        onChange={handleChange}
        onClick={handleChecked}
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
