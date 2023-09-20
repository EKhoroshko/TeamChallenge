import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import propTypes from 'prop-types';
import { initial } from '../../helpers/initialStateToURL';
import css from './CheckBox.module.css';

const CheckBox = ({ type, handleChange }) => {
  const [searchParams] = useSearchParams();
  const initialBrand = initial(searchParams, 'brand');
  const initialType = initial(searchParams, 'type');
  const [checkedFilter] = useState([...initialBrand, ...initialType]);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    if (checkedFilter.includes(type)) {
      setChecked(true);
    } else {
      setChecked(false);
    }
  }, [checkedFilter, type]);

  useEffect(() => {
    if (
      searchParams.get('brand') === null &&
      searchParams.get('type') === null
    ) {
      setChecked(false);
    }
  }, [searchParams]);

  const handleChecked = () => {
    setChecked(!checked);
  };

  return (
    <li className={css.item}>
      <label className={css.label} htmlFor={type}>
        <input
          type="checkbox"
          className={css.cheackbox}
          id={type}
          checked={checked}
          value={type}
          onChange={handleChange}
          onClick={handleChecked}
        />
        <span className={css.customCheckbox}></span>
        <span className={css.text}>{type}</span>
      </label>
    </li>
  );
};

CheckBox.propTypes = {
  type: propTypes.string,
  handleChange: propTypes.func,
};

export default CheckBox;
