import { useState } from 'react';
import Slider from 'react-slick';
import { getIsLoadingProduct } from '../../../../redux/product/selector';
import { useSelector } from 'react-redux';
import Spinner from '../../../../Components/Spinner/Spinner';
import RecomCard from './RecomCard';
import Filter from './Filter';
import css from './Recomendation.module.css';

// eslint-disable-next-line react/prop-types
const Recomendation = ({ product = [] }) => {
  const [activeFilter, setActiveFilter] = useState('news');
  const isLoading = useSelector(getIsLoadingProduct);

  const onFilterSelect = name => {
    setActiveFilter(name);
  };

  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 3000,
    slidesToShow: 4,
    slidesToScroll: 2,
  };

  const swiper = !isLoading ? (
    <Slider {...settings}>
      {product &&
        product.map(({ itemId, name, price }) => (
          <RecomCard key={itemId} name={name} price={price} />
        ))}
    </Slider>
  ) : (
    <div className={css.spiner}>
      <Spinner />
    </div>
  );

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div className={css.header}>
          <h3 className={css.title}>Recommendations</h3>
          <Filter onFilterSelect={onFilterSelect} btnName={activeFilter} />
        </div>
        <div className={css.sliderBox}>{swiper}</div>
      </div>
    </section>
  );
};

export default Recomendation;
