import { useSelector } from 'react-redux';
import propTypes from 'prop-types';
import { getAllProducts } from '../../../../redux/product/selector';
import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import css from './Box.module.css';

const Box = ({ addToCart }) => {
  const products = useSelector(getAllProducts);

  return (
    <section className={css.box}>
      <div className={css.container}>
        <FilterPanel />
        <Pagination products={products.items} addToCart={addToCart} />
      </div>
    </section>
  );
};

Box.propTypes = {
  addToCart: propTypes.func,
};

export default Box;
