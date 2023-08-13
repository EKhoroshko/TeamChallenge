import propTypes from 'prop-types';
import css from './InputRange.module.css';

const InputRange = ({ maxPrice, handleChangeFilterSelectRange, range }) => {
  return (
    <>
      {maxPrice !== null ? (
        <>
          <label className={css.label} htmlFor="price">
            <datalist id="values" className={css.datalist}>
              <option
                className={css.optionZero}
                value="0"
                label="Price"
              ></option>
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
              onChange={e =>
                handleChangeFilterSelectRange('range', e.target.value)
              }
            />
          </label>
          <p className={css.current}>Current price: {range}</p>
        </>
      ) : null}
    </>
  );
};

InputRange.propTypes = {
  params: propTypes.string,
  maxPrice: propTypes.number,
  handleChangeFilterSelectRange: propTypes.func,
  range: propTypes.number,
};

export default InputRange;
