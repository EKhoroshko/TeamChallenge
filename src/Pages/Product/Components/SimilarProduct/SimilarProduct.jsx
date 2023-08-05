import propTypes from 'prop-types';
import CatalogCard from '../../../Catalog/Components/CatalogCard/CatalogCard';
import css from './SimilarProduct.module.css';

const SimilarProduct = ({
  addToCart,
  handleDeletProduct,
  handleAddFavorite,
  isLoading,
  token,
  product,
}) => {
  return (
    <>
      {product.length !== 0 ? (
        <section className={css.section}>
          <div className={css.container}>
            <h3 className={css.title}>Similar Product</h3>
            <ul className={css.list}>
              {product
                .slice(0, 4)
                .map(
                  ({
                    itemId,
                    name,
                    price,
                    description,
                    category,
                    image,
                    subcategory,
                  }) => (
                    <CatalogCard
                      itemId={itemId}
                      image={image}
                      key={itemId}
                      name={name}
                      price={price}
                      description={description}
                      category={category}
                      subcategory={subcategory}
                      margin={css.margin}
                      addToCart={addToCart}
                      handleAddFavorite={handleAddFavorite}
                      handleDeletProduct={handleDeletProduct}
                      token={token}
                      isLoading={isLoading}
                    />
                  ),
                )}
            </ul>
          </div>
        </section>
      ) : null}
    </>
  );
};

SimilarProduct.propTypes = {
  addToCart: propTypes.func,
  handleAddFavorite: propTypes.func,
  handleDeletProduct: propTypes.func,
  isLoading: propTypes.bool,
  token: propTypes.string,
  product: propTypes.array,
};

export default SimilarProduct;
