import { useState } from 'react';
import propTypes from 'prop-types';
import css from './InputRange.module.css';

// eslint-disable-next-line react/prop-types
const InputRange = ({ maxPrice }) => {
  const [value, setValue] = useState(0);

  const handleChange = e => setValue(e.target.value);

  return (
    <>
      <label className={css.label} htmlFor="price">
        <datalist id="values" className={css.datalist}>
          <option className={css.optionZero} value="0" label="Price"></option>
          <option
            className={css.option}
            value={maxPrice}
            label={maxPrice}
          ></option>
        </datalist>
        <input
          className={css.range}
          list="values"
          type="range"
          name="price"
          id="price"
          min="0"
          step="1"
          max={maxPrice}
          value={value}
          onChange={handleChange}
        />
      </label>
      <p className={css.current}>Current price: {value}</p>
    </>
  );
};

InputRange.propTypes = {
  params: propTypes.string,
};

export default InputRange;
