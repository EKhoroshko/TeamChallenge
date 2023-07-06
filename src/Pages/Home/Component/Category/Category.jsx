import { useState } from 'react';
import CategoryCard from './CategoryCard';
import Cats from '../../../../assets/cats.jpg';
import Dogs from '../../../../assets/dogs.jpg';
import Birds from '../../../../assets/birds.jpg';
import Rodents from '../../../../assets/rodents.jpg';
import Fish from '../../../../assets/fish.jpg';
import Reptilies from '../../../../assets/reptiles.jpg';
import css from './Category.module.css';

const Category = () => {
  const [category] = useState([
    {
      src: Cats,
      title: 'Cats',
      id: 1,
    },
    {
      src: Dogs,
      title: 'Dogs',
      id: 2,
    },
    {
      src: Birds,
      title: 'Birds',
      id: 3,
    },
    {
      src: Rodents,
      title: 'Rodents',
      id: 4,
    },
    {
      src: Fish,
      title: 'Fish',
      id: 5,
    },
    {
      src: Reptilies,
      title: 'Reptiles',
      id: 6,
    },
  ]);

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
