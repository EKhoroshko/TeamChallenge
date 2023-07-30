import propTypes from 'prop-types';
import css from './SelectFilter.module.css';

const SelectFilter = ({ select, handleChangeSelect }) => {
  return (
    <select
      name="sorted"
      id="sort"
      value={select}
      className={css.select}
      onChange={handleChangeSelect}
    >
      <option value="name">By name</option>
      <option value="cheap">Сheap at first</option>
      <option value="expensive">Expensive at first</option>
      <option value="new">New ones</option>
    </select>
  );
};

SelectFilter.propTypes = {
  select: propTypes.string,
  handleChangeSelect: propTypes.func,
};

export default SelectFilter;
