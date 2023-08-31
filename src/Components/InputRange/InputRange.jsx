import { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import css from './InputRange.module.css';

const InputRange = ({ maxPrice, handleChangeFilterSelectRange, range }) => {
  const [currentRange, setCurrentRange] = useState(range);

  useEffect(() => {
    setCurrentRange(range);
  }, [range]);

  const handleRangeChange = e => {
    setCurrentRange(e.target.value);
  };

  const handleRangeMouseUp = () => {
    handleChangeFilterSelectRange('range', currentRange);
  };

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
          value={currentRange || 0}
          onChange={handleRangeChange}
          onMouseUp={handleRangeMouseUp}
        />
      </label>
      <p className={css.current}>Current price: {range}</p>
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
