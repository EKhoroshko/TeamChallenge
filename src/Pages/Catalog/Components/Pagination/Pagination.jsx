import FilterCategory from '../FilterCategory/FilterCategory';
import css from './Pagination.module.css';

const Pagination = () => {
  return (
    <div className={css.container}>
      <div className={css.buttonFilter}>
        <FilterCategory />
      </div>
      <div></div>
    </div>
  );
};

export default Pagination;
