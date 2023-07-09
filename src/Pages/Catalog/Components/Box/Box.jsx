import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import css from './Box.module.css';

const Box = () => {
  return (
    <div className={css.box}>
      <FilterPanel />
      <Pagination />
    </div>
  );
};

export default Box;
