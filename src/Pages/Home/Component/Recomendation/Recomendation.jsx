import { useState } from 'react';
import propTypes from 'prop-types';
import Slider from 'react-slick';
import { getIsLoadingProduct } from '../../../../redux/product/selector';
import { useSelector } from 'react-redux';
import { addToCart } from '../../../../helpers/addToCart';
import { recomendationSlider } from '../../../../enum/optionSlider';
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

  const swiper = !isLoading ? (
    <Slider className="slider" {...recomendationSlider}>
      {product &&
        product.map(
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
              addToCart={addToCart}
            />
          ),
        )}
    </Slider>
  ) : (
    <div className={css.spiner}>
      <Spinner />
    </div>
  );

  return (
    <section className={css.section}>
      <div className={css.container}>
        <div>
          <Filter onFilterSelect={onFilterSelect} btnName={activeFilter} />
        </div>
        <div className={css.sliderBox}>{swiper}</div>
      </div>
    </section>
  );
};

Recomendation.propTypes = {
  products: propTypes.array,
};

export default Recomendation;
