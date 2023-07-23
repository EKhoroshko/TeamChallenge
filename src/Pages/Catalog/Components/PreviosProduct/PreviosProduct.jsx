import { useState } from 'react';
import RecomCard from '../../../Home/Component/Recomendation/RecomCard';
import css from './PreviosProduct.module.css';

// eslint-disable-next-line react/prop-types
const PreviosProduct = ({ viewedProducts }) => {
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
              <RecomCard
                itemId={itemId}
                image={image}
                key={itemId}
                name={name}
                price={price}
                description={description}
                category={category}
                subcategory={subcategory}
                margin={css.margin}
              />
            ),
          )}
        </ul>
      </div>
    </section>
  );
};

export default PreviosProduct;
