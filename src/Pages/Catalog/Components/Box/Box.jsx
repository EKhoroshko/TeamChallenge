import propTypes from 'prop-types';
import FilterPanel from '../FilterPanel/FilterPanel';
import Pagination from '../Pagination/Pagination';
import css from './Box.module.css';

const Box = ({
  products,
  addToCart,
  handleDeletProduct,
  totalPages,
  currentPage,
  paginate,
  nextPage,
  previousPage,
  handleAddFavorite,
  params,
  token,
  isLoading,
  select,
  handleChangeSelect,
  maxPrice,
  availableTypes,
  availableBrands,
  availableSorts,
}) => {
  return (
    <section className={css.box}>
      <div className={css.container}>
        <FilterPanel
          params={params}
          select={select}
          maxPrice={maxPrice}
          availableTypes={availableTypes}
          availableBrands={availableBrands}
        />
        <Pagination
          products={products}
          addToCart={addToCart}
          totalPages={totalPages}
          currentPage={currentPage}
          paginate={paginate}
          nextPage={nextPage}
          previousPage={previousPage}
          handleAddFavorite={handleAddFavorite}
          handleDeletProduct={handleDeletProduct}
          token={token}
          isLoading={isLoading}
          select={select}
          handleChangeSelect={handleChangeSelect}
          availableSorts={availableSorts}
        />
      </div>
    </section>
  );
};

Box.propTypes = {
  addToCart: propTypes.func,
  handleDeletProduct: propTypes.func,
  products: propTypes.array,
  totalPages: propTypes.number,
  currentPage: propTypes.number,
  paginate: propTypes.func,
  nextPage: propTypes.func,
  previousPage: propTypes.func,
  handleAddFavorite: propTypes.func,
  params: propTypes.object,
  token: propTypes.string,
  isLoading: propTypes.bool,
  select: propTypes.string,
  handleChangeSelect: propTypes.func,
  maxPrice: propTypes.number,
  availableTypes: propTypes.array,
  availableBrands: propTypes.array,
  availableSorts: propTypes.array,
};

export default Box;
