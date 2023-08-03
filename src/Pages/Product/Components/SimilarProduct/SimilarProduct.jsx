import propTypes from 'prop-types';
import CatalogCard from '../../../Catalog/Components/CatalogCard/CatalogCard';
import css from './SimilarProduct.module.css';

const SimilarProduct = ({
  itemId,
  category,
  subcategory,
  addToCart,
  handleDeletProduct,
  handleAddFavorite,
  isLoading,
  token,
}) => {
  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>SimilarProduct</h3>
        <ul className={css.list}>
          list similar Product
          <CatalogCard
            itemId={itemId}
            category={category}
            subcategory={subcategory}
            addToCart={addToCart}
            handleDeletProduct={handleDeletProduct}
            handleAddFavorite={handleAddFavorite}
            isLoading={isLoading}
            token={token}
          />
        </ul>
      </div>
    </section>
  );
};

SimilarProduct.propTypes = {
  itemId: propTypes.string,
  category: propTypes.string,
  subcategory: propTypes.string,
  addToCart: propTypes.func,
  handleAddFavorite: propTypes.func,
  handleDeletProduct: propTypes.func,
  isLoading: propTypes.bool,
  token: propTypes.string,
};

export default SimilarProduct;
