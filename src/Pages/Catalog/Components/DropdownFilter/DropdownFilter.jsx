import propTypes from 'prop-types';
import css from './DropdownFilter.module.css';

const DropdownFilter = ({ select, handleChangeSelect }) => {
  return (
    <select
      name="sorted"
      id="sort"
      value={select}
      className={css.select}
      onChange={handleChangeSelect}
    >
      <option value="popular">Popular</option>
      <option value="cheap">Сheap at first</option>
      <option value="expensive">Expensive at first</option>
      <option value="name">By name</option>
      <option value="new">New ones</option>
    </select>
  );
};

DropdownFilter.propTypes = {
  select: propTypes.string,
  handleChangeSelect: propTypes.func,
};

export default DropdownFilter;
