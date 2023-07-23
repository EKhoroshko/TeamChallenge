import { useState } from 'react';
import CategoryCard from './CategoryCard';
import { Categorys } from '../../../../enum/category';
import css from './Category.module.css';

const Category = () => {
  const [category] = useState(Categorys);

  const [showAll, setShowAll] = useState(false);

  const toggleCategory = () => {
    setShowAll(!showAll);
  };

  const show = showAll ? 'Hide categories' : 'All categories';

  const displayedCategories = showAll ? category : category.slice(0, 4);

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.boxTitle}>
          <h3>Product categories</h3>
          <button className={css.link} onClick={toggleCategory}>
            {show}
          </button>
        </div>
        <ul className={css.list}>
          {displayedCategories.map(item => (
            <CategoryCard key={item.id} title={item.title} bg={item.src} />
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Category;
