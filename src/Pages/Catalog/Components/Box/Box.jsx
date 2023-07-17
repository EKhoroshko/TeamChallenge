import { useSelector } from 'react-redux';
import { getAllProducts } from '../../../../redux/product/selector';
import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import css from './Box.module.css';

const Box = () => {
  const products = useSelector(getAllProducts);

  return (
    <section className={css.box}>
      <FilterPanel />
      <Pagination products={products.items} />
    </section>
  );
};

export default Box;
