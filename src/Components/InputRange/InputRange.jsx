import propTypes from 'prop-types';
import css from './InputRange.module.css';

const InputRange = ({ maxPrice, handleChangeRange, range }) => {
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
          value={range}
          onChange={handleChangeRange}
        />
      </label>
      <p className={css.current}>Current price: {range}</p>
    </>
  );
};

InputRange.propTypes = {
  params: propTypes.string,
  handleChangeRange: propTypes.func,
  range: propTypes.string,
};

export default InputRange;
