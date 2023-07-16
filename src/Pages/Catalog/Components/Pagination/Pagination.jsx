import { useSelector } from 'react-redux';
import FilterCategory from '../FilterCategory/FilterCategory';
import Spinner from '../../../../Components/Spinner/Spinner';
import {
  getAllProducts,
  getIsLoadingProduct,
} from '../../../../redux/product/selector';
import RecomCard from '../../../Home/Component/Recomendation/RecomCard';
import css from './Pagination.module.css';

const Pagination = () => {
  const products = useSelector(getAllProducts);
  const isLoading = useSelector(getIsLoadingProduct);

  const load = isLoading ? (
    <Spinner />
  ) : (
    <>
      {products &&
        products
          .slice(0, 9)
          .map(
            ({
              itemId,
              description,
              name,
              price,
              category,
              image,
              subcategory,
            }) => {
              return (
                <RecomCard
                  key={itemId}
                  description={description}
                  name={name}
                  price={price}
                  category={category}
                  itemId={itemId}
                  subcategory={subcategory}
                  image={image}
                  margin={css.margin}
                />
              );
            },
          )}
    </>
  );

  return (
    <div className={css.container}>
      <div className={css.buttonFilter}>
        <FilterCategory />
      </div>
      <ul className={css.list}>{load}</ul>
    </div>
  );
};

export default Pagination;
