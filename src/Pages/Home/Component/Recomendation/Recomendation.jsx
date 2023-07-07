import { useState } from 'react';
import Slider from 'react-slick';
import RecomCard from './RecomCard';
import Filter from './Filter';
import css from './Recomendation.module.css';

// eslint-disable-next-line react/prop-types
const Recomendation = ({ product = [] }) => {
  const [activeFilter, setActiveFilter] = useState('news');

  const onFilterSelect = name => {
    setActiveFilter(name);
  };

  const settings = {
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.header}>
          <h3 className={css.title}>Recommendations</h3>
          <Filter onFilterSelect={onFilterSelect} btnName={activeFilter} />
        </div>
        <div
          style={{
            width: '500px',
          }}
        >
          <Slider {...settings}>
            {product &&
              product.map(({ itemId, name, price }) => (
                <RecomCard key={itemId} name={name} price={price} />
              ))}
          </Slider>
        </div>
      </div>
    </section>
  );
};

export default Recomendation;
