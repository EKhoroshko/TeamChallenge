import propTypes from 'prop-types';
import css from './SelectFilter.module.css';

const SelectFilter = ({
  select,
  // eslint-disable-next-line react/prop-types
  handleChangeFilterSelectRange,
  availableSorts,
}) => {
  return (
    <select
      name="sorted"
      id="sort"
      value={select}
      className={css.select}
      onChange={e => handleChangeFilterSelectRange('sort', e.target.value)}
    >
      {availableSorts !== undefined
        ? availableSorts.map(item => (
            <option key={item} value={item}>
              {item}
            </option>
          ))
        : null}
    </select>
  );
};

SelectFilter.propTypes = {
  select: propTypes.string,
  handleChangeSelect: propTypes.func,
  availableSorts: propTypes.array,
};

export default SelectFilter;
