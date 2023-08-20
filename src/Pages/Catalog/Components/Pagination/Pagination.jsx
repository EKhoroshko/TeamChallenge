/* eslint-disable react/prop-types */
import propTypes from 'prop-types';
import { useSelector } from 'react-redux';
import { getIsLoadingProduct } from '../../../../redux/product/selector';
import FilterCategory from '../FilterCategory/FilterCategory';
import Spinner from '../../../../Components/Spinner/Spinner';
import CatalogCard from '../CatalogCard/CatalogCard';
import Paginate from './Paginate';
import css from './Pagination.module.css';

const Pagination = ({
  products = [],
  addToCart,
  totalPages,
  currentPage,
  paginate,
  nextPage,
  previousPage,
  handleAddFavorite,
  handleDeletProduct,
  token,
  select,
  handleChangeFilterSelectRange,
  availableSorts,
  handleResetFilter,
}) => {
  const isLoadingProduct = useSelector(getIsLoadingProduct);

  const load = isLoadingProduct ? (
    <div className={css.load}>
      <Spinner />
    </div>
  ) : (
    <>
      {products &&
        products.map(
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
              <CatalogCard
                key={itemId}
                description={description}
                name={name}
                price={price}
                category={category}
                itemId={itemId}
                subcategory={subcategory}
                image={image}
                margin={css.margin}
                addToCart={addToCart}
                handleAddFavorite={handleAddFavorite}
                handleDeletProduct={handleDeletProduct}
                token={token}
              />
            );
          },
        )}
    </>
  );

  return (
    <div className={css.container}>
      <div className={css.buttonFilter}>
        <FilterCategory
          select={select}
          handleChangeFilterSelectRange={handleChangeFilterSelectRange}
          availableSorts={availableSorts}
          handleResetFilter={handleResetFilter}
        />
      </div>
      <ul className={css.list}>
        {products.length === 0 ? (
          <div>The products are out of stock</div>
        ) : (
          load
        )}
      </ul>
      {totalPages > 1 ? (
        <Paginate
          paginate={paginate}
          previousPage={previousPage}
          nextPage={nextPage}
          totalPages={totalPages}
          currentPage={currentPage}
        />
      ) : null}
    </div>
  );
};

CatalogCard.propTypes = {
  products: propTypes.array,
  addToCart: propTypes.func,
  totalPages: propTypes.number,
  currentPage: propTypes.number,
  paginate: propTypes.func,
  nextPage: propTypes.func,
  previousPage: propTypes.func,
  handleAddFavorite: propTypes.func,
  handleDeletProduct: propTypes.func,
  token: propTypes.string,
  select: propTypes.string,
  handleChangeFilterSelectRange: propTypes.func,
  availableSorts: propTypes.array,
  handleResetFilter: propTypes.func,
};

export default Pagination;
