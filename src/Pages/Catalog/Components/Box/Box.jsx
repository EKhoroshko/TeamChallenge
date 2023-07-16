import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import css from './Box.module.css';

const Box = () => {
  return (
    <section className={css.box}>
      <FilterPanel />
      <Pagination />
    </section>
  );
};

export default Box;
