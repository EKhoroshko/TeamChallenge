import { useSelector } from 'react-redux';
import FilterCategory from '../FilterCategory/FilterCategory';
import { getAllProducts } from '../../../../redux/product/selector';
import RecomCard from '../../../Home/Component/Recomendation/RecomCard';
import css from './Pagination.module.css';

const Pagination = () => {
  const product = useSelector(getAllProducts);

  return (
    <div className={css.container}>
      <div className={css.buttonFilter}>
        <FilterCategory />
      </div>
      <ul className={css.list}>
        {product &&
          product.map(({ itemId, description, name, price }) => {
            return (
              <RecomCard
                key={itemId}
                description={description}
                name={name}
                price={price}
                margin={css.margin}
              />
            );
          })}
      </ul>
    </div>
  );
};

export default Pagination;
