import { useState } from 'react';
import propTypes from 'prop-types';
import CatalogCard from '../CatalogCard/CatalogCard';
import css from './PreviosProduct.module.css';

// eslint-disable-next-line react/prop-types
const PreviosProduct = ({ viewedProducts, addToCart }) => {
  const [products] = useState(viewedProducts);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <h3 className={css.title}>Previously reviewed products</h3>
        <ul className={css.list}>
          {products.map(
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
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

PreviosProduct.propTypes = {
  viewedProducts: propTypes.array,
  addToCart: propTypes.func,
};

export default PreviosProduct;
